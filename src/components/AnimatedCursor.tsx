import { useEffect, useRef, useState } from 'react'

// FORCE CURSOR ON FOR DEBUGGING - ALWAYS SHOW
const detectDesktop = () => {
  console.log('🔥 FORCING CURSOR ON FOR DEBUGGING!')
  return true // ALWAYS TRUE
}

// Lightweight custom cursor with trailing glow (desktop only)
export const AnimatedCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const dotRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const raf = useRef<number>()
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const clicking = useRef(false)
  const scale = useRef(1)
  const scaleTarget = useRef(1)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const init = () => {
      const hover = window.matchMedia('(hover: hover)').matches
      const fine = window.matchMedia('(pointer: fine)').matches
      const wide = window.innerWidth >= 768
      const desktop = detectDesktop()
      setIsDesktop(desktop)
      setIsReady(true)
      if (desktop) {
        document.body.classList.add('custom-cursor-active')
      } else {
        document.body.classList.remove('custom-cursor-active')
      }
      // Always log for debugging (not just DEV mode)
      console.log('🔥 [AnimatedCursor] INIT CALLED!', { 
        desktop, 
        hover, 
        fine, 
        wide, 
        width: window.innerWidth,
        bodyHasClass: document.body.classList.contains('custom-cursor-active'),
        userAgent: navigator.userAgent.substring(0, 60)
      })
      if (typeof window !== 'undefined') {
        pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        target.current = { x: pos.current.x, y: pos.current.y }
      }
      if (typeof document !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'))
      }
    }
    init()
    const handleResize = () => init()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  // Don't render cursor on mobile/touch devices or before ready
  if (!isReady) {
    console.log('❌ [AnimatedCursor] not ready yet')
    return null
  }
  if (!isDesktop) {
    console.log('❌ [AnimatedCursor] not desktop, hiding cursor')
    return null
  }
  
  console.log('✅ [AnimatedCursor] RENDERING CURSOR ELEMENTS!', { isReady, isDesktop })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    const down = () => {
      clicking.current = true
      scaleTarget.current = 1.4
    }
    const up = () => {
      clicking.current = false
      scaleTarget.current = 1
    }
    const context = () => {
      // Subtle pulse on right-click
      scaleTarget.current = 1.2
      setTimeout(() => { if (!clicking.current) scaleTarget.current = 1 }, 200)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    window.addEventListener('contextmenu', context)

    const animate = () => {
      // Smooth multi-layer trailing for elegant effect
      pos.current.x += (target.current.x - pos.current.x) * 0.25
      pos.current.y += (target.current.y - pos.current.y) * 0.25
      // Smooth scale animation
      scale.current += (scaleTarget.current - scale.current) * 0.2

      const dotTransform = `translate3d(${target.current.x}px, ${target.current.y}px,0) scale(${scale.current.toFixed(3)})`
      const ringLagX = target.current.x - (target.current.x - pos.current.x) * 0.6
      const ringLagY = target.current.y - (target.current.y - pos.current.y) * 0.6
      const ringScale = 0.85 + (scale.current - 1) * 0.4
      const ringTransform = `translate3d(${ringLagX}px, ${ringLagY}px,0) scale(${ringScale.toFixed(3)})`
      const glowScale = 0.7 + (scale.current - 1) * 0.3
      const glowTransform = `translate3d(${pos.current.x - 48}px, ${pos.current.y - 48}px,0) scale(${glowScale.toFixed(3)})`

      if (dotRef.current) dotRef.current.style.transform = dotTransform
      if (ringRef.current) {
        ringRef.current.style.transform = ringTransform
        ringRef.current.style.opacity = clicking.current ? '0.9' : '0.7'
      }
      if (glowRef.current) {
        glowRef.current.style.transform = glowTransform
        glowRef.current.style.opacity = clicking.current ? '0.8' : '0.5'
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)
    return () => {
  window.removeEventListener('mousemove', move)
  window.removeEventListener('mousedown', down)
  window.removeEventListener('mouseup', up)
  window.removeEventListener('contextmenu', context)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  // Observe theme class changes for instant cursor color update
  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'))
    })
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // SUPER OBVIOUS DEBUG CURSOR - IMPOSSIBLE TO MISS
  const sizeClass = 'h-12 w-12'
  const dotColor = 'bg-red-500 shadow-[0_0_50px_20px_red] border-4 border-yellow-400 z-[9999]'
  const ringBase = 'pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border will-change-transform transition-opacity duration-150'
  const ringStyle = 'h-24 w-24 border-8 border-blue-500 shadow-[0_0_100px_50px_blue]'
  const glowColor = 'bg-green-500/90 h-48 w-48 z-[9997]'
  
  console.log('🎯 [AnimatedCursor] MASSIVE DEBUG CURSOR STYLED!')

  return (
    <>
      {/* DEBUG: Static indicator to prove component renders */}
      <div
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          background: 'red',
          color: 'white',
          padding: '5px',
          zIndex: 10000,
          fontSize: '12px'
        }}
      >
        🔥 CURSOR COMPONENT ACTIVE
      </div>
      
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] ${sizeClass} -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform ${dotColor}`}
      />
      <div
        ref={ringRef}
        className={`${ringBase} ${ringStyle}`}
      />
      <div
        ref={glowRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9997] ${glowColor} rounded-full blur-3xl will-change-transform transition-[scale,opacity] duration-300`}
      />
    </>
  )
}
