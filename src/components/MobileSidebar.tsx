import { useState } from "react"
import { Menu, X } from "lucide-react"
import { PixelThemeToggle } from "./PixelThemeToggle"

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Get In Touch", href: "#get-in-touch" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) // Close sidebar after navigation
    }
  }

  return (
    <div className="hidden">
      {/* Mobile Header with Menu Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <button
            type="button"
            aria-label="Go to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono font-bold text-sm relative group focus:outline-none transition-all duration-500"
          >
            <div className="relative z-10 flex items-center">
              <span className="text-neon-cyan">{'<'}</span>
              <span className="mx-1">EZZELDEEN.AI</span>
              <span className="text-neon-cyan">{'/>'}</span>
            </div>
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-background border-l border-border z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="font-mono font-bold text-lg">
              <span className="text-neon-cyan">{'<'}</span>
              <span className="mx-1">Menu</span>
              <span className="text-neon-cyan">{'/>'}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg border border-border bg-background hover:bg-accent transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left font-mono text-sm uppercase tracking-wide relative group p-3 rounded-lg transition-all duration-300 hover:bg-accent border border-transparent hover:border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <div className="flex items-center justify-between">
                  <span className="relative z-10 transition-all duration-300 group-hover:text-neon-cyan">
                    {item.name}
                  </span>
                  <span className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    →
                  </span>
                </div>
                
                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-border space-y-3">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm">Theme</span>
              <PixelThemeToggle />
            </div>
            
            {/* Hire Me Button */}
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="w-full pixel-border font-mono font-bold transition-all duration-75 border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground px-4 py-3 text-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Hire Me
            </button>

            {/* ASCII Decoration */}
            <div className="text-center text-neon-blue/30 text-xs font-mono mt-4">
              ◆─◆─◆ PORTFOLIO ◆─◆─◆
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </div>
  )
}