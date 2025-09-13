import { useEffect, useRef, useState } from 'react'

// FORCE DESKTOP MODE FOR TESTING - ALWAYS SHOW CURSOR
const detectDesktop = () => {
  console.log('[FORCE] Always returning true for testing!')
  return true // FORCE ON
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
      console.log('[AnimatedCursor] init', { 
        desktop, 
        hover, 
        fine, 
        wide, 
        width: window.innerWidth,
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
    console.log('[AnimatedCursor] not ready yet')
    return null
  }
  if (!isDesktop) {
    console.log('[AnimatedCursor] not desktop, hiding cursor')
    return null
  }
  
  console.log('[AnimatedCursor] rendering cursor elements')

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    const down = () => {
      clicking.current = true
      scaleTarget.current = 1.55
    }
    const up = () => {
      clicking.current = false
      scaleTarget.current = 1
    }
    const context = () => {
      // Keep cursor slightly enlarged when context menu opens
      scaleTarget.current = 1.25
      setTimeout(() => { if (!clicking.current) scaleTarget.current = 1 }, 260)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    window.addEventListener('contextmenu', context)

    const animate = () => {
      // multi-layer trailing: glow (slow), ring (mid), dot (immediate)
      pos.current.x += (target.current.x - pos.current.x) * 0.32 // slower for smoother trail
      pos.current.y += (target.current.y - pos.current.y) * 0.32
      // scale interpolation (spring-like smoothing)
      scale.current += (scaleTarget.current - scale.current) * 0.25

      const dotTransform = `translate3d(${target.current.x}px, ${target.current.y}px,0) scale(${scale.current.toFixed(3)})`
      const ringLagX = target.current.x - (target.current.x - pos.current.x) * 0.45
      const ringLagY = target.current.y - (target.current.y - pos.current.y) * 0.45
      const ringScale = 0.9 + (scale.current - 1) * 0.55
      const ringTransform = `translate3d(${ringLagX}px, ${ringLagY}px,0) scale(${ringScale.toFixed(3)})`
      const glowScale = 0.65 + (scale.current - 1) * 0.35
      const glowTransform = `translate3d(${pos.current.x - 30}px, ${pos.current.y - 30}px,0) scale(${glowScale.toFixed(3)})`

      if (dotRef.current) dotRef.current.style.transform = dotTransform
      if (ringRef.current) {
        ringRef.current.style.transform = ringTransform
        ringRef.current.style.opacity = clicking.current ? '0.95' : '0.75'
      }
      if (glowRef.current) {
        glowRef.current.style.transform = glowTransform
        glowRef.current.style.opacity = clicking.current ? '0.9' : '0.55'
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

  // SUPER VISIBLE TEST CURSOR - HUGE AND BRIGHT
  const sizeClass = 'h-8 w-8' // Make it much bigger
  const dotColor = 'bg-red-500 shadow-[0_0_30px_10px_red] border-4 border-yellow-400'
  const ringBase = 'pointer-events-none fixed top-0 left-0 z-[95] -translate-x-1/2 -translate-y-1/2 rounded-full border will-change-transform transition-opacity'
  const ringStyle = 'h-16 w-16 border-4 border-blue-500 shadow-[0_0_50px_20px_blue]'
  const glowColor = 'bg-green-500/80 h-32 w-32'
  
  console.log('[AnimatedCursor] styling applied:', { sizeClass, isDark })

  return (
    <>
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[100] ${sizeClass} -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform ${dotColor}`}
      />
      <div
        ref={ringRef}
        className={`${ringBase} ${ringStyle}`}
      />
      <div
        ref={glowRef}
        className={`pointer-events-none fixed top-0 left-0 z-[90] ${glowColor} rounded-full blur-2xl will-change-transform transition-[scale,opacity] duration-200`}
      />
    </>
  )
}
