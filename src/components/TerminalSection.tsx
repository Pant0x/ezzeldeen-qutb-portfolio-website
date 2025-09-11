import { useState, useEffect } from "react"

interface TerminalSectionProps {
  children: React.ReactNode
  title?: string
  className?: string
}

export function TerminalSection({ children, title, className = "" }: TerminalSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`pixel-card relative ${className} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      {title && (
        <div className="pixel-border bg-primary text-primary-foreground px-3 py-1 mb-4 inline-block">
          <span className="font-mono text-xs uppercase font-bold">{title}</span>
        </div>
      )}
      <div className="relative scanlines">
        {children}
      </div>
    </div>
  )
}