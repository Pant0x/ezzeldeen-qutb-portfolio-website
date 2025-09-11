import { useEffect, useRef, useState } from 'react'

// Lightweight custom cursor with trailing glow
export const AnimatedCursor = () => {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const raf = useRef<number>()
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const target = useRef({ x: pos.current.x, y: pos.current.y })
  const clicking = useRef(false)
  const scale = useRef(1)
  const scaleTarget = useRef(1)
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    const down = () => {
      clicking.current = true
      scaleTarget.current = 1.7
    }
    const up = () => {
      clicking.current = false
      scaleTarget.current = 1
    }
    const context = (e: MouseEvent) => {
      // Keep cursor visible even when opening context menu
      scaleTarget.current = 1.3
      setTimeout(() => { if (!clicking.current) scaleTarget.current = 1 }, 300)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    window.addEventListener('contextmenu', context)

    const animate = () => {
      // fast trailing interpolation
      pos.current.x += (target.current.x - pos.current.x) * 0.55
      pos.current.y += (target.current.y - pos.current.y) * 0.55
      // scale interpolation
      scale.current += (scaleTarget.current - scale.current) * 0.35

      const dotTransform = `translate3d(${target.current.x}px, ${target.current.y}px,0) scale(${scale.current.toFixed(3)})`
      const glowScale = 0.75 + (scale.current - 1) * 0.4 // subtle sync change
      const glowTransform = `translate3d(${pos.current.x - 25}px, ${pos.current.y - 25}px,0) scale(${glowScale.toFixed(3)})`

      if (dotRef.current) dotRef.current.style.transform = dotTransform
      if (glowRef.current) {
        glowRef.current.style.transform = glowTransform
        glowRef.current.style.opacity = clicking.current ? '0.95' : '0.6'
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

  // Theme-based styling: brighten & enlarge in light mode for contrast
  const sizeClass = isDark ? 'h-3 w-3' : 'h-4 w-4'
  const dotColor = isDark
    ? 'bg-neon-cyan shadow-[0_0_8px_2px_hsl(var(--neon-cyan)/0.9),0_0_18px_6px_hsl(var(--neon-purple)/0.35)]'
    : 'bg-neon-purple shadow-[0_0_4px_2px_hsl(var(--neon-purple)/0.95),0_0_14px_6px_hsl(var(--neon-pink)/0.5),0_0_28px_10px_hsl(var(--neon-purple)/0.35)] ring-2 ring-white/70'
  const glowColor = isDark ? 'bg-neon-purple/25 h-16 w-16' : 'bg-neon-purple/50 h-20 w-20'

  return (
    <>
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[100] ${sizeClass} -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform ${dotColor}`}
      />
      <div
        ref={glowRef}
        className={`pointer-events-none fixed top-0 left-0 z-[90] ${glowColor} rounded-full blur-2xl will-change-transform transition-[scale,opacity] duration-150`}
      />
    </>
  )
}
