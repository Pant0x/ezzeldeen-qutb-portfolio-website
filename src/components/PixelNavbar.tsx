import { useState, useEffect } from "react"
import { PixelThemeToggle } from "./PixelThemeToggle"
import { PixelButton } from "./PixelButton"

export function PixelNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 block ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-pixel' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            aria-label="Go to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono font-bold text-lg relative group focus:outline-none transition-all duration-500 hover:scale-110 active:scale-95 px-4 py-2 rounded-lg"
          >
            {/* Animated background layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-lg blur-md"></div>
            <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg transform -skew-x-12 group-hover:animate-pulse"></div>
            
            {/* Text content with individual letter animations */}
            <div className="relative z-10 flex items-center transition-all duration-500">
              <span className="text-neon-cyan group-hover:text-white transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110 inline-block">{'<'}</span>
              <span className="mx-1 group-hover:text-white transition-all duration-500 transform group-hover:translate-y-[-2px] group-hover:tracking-wider">
                EZZELDEEN.AI
              </span>
              <span className="text-neon-cyan group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12 group-hover:scale-110 inline-block">{'/>'}</span>
            </div>
            
            {/* Particle effect simulation */}
            <div className="absolute top-0 left-0 w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>
            <div className="absolute top-0 right-0 w-1 h-1 bg-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute bottom-0 left-0 w-1 h-1 bg-neon-pink rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping" style={{animationDelay: '0.4s'}}></div>
            <div className="absolute bottom-0 right-0 w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping" style={{animationDelay: '0.6s'}}></div>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-mono text-sm uppercase tracking-wide relative group px-3 py-2 rounded-lg transition-all duration-500 hover:scale-110 active:scale-95 focus:outline-none"
              >
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-lg blur-md"></div>
                <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg transform -skew-x-12 group-hover:animate-pulse"></div>
                
                {/* Text content */}
                <div className="relative z-10 transition-all duration-500 group-hover:text-white group-hover:translate-y-[-2px] group-hover:tracking-wider">
                  {item.name}
                </div>
                
                {/* Particle effect simulation */}
                <div className="absolute top-0 left-0 w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>
                <div className="absolute top-0 right-0 w-1 h-1 bg-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-neon-pink rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping" style={{animationDelay: '0.6s'}}></div>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <PixelThemeToggle />
            <button
              type="button"
              onClick={() => scrollToSection('#contact')}
              className="hidden sm:inline-flex pixel-border font-mono font-bold transition-all duration-75 items-center justify-center border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground px-3 py-1 text-xs hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Hire Me
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-4 justify-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-mono text-xs uppercase tracking-wide relative group px-2 py-1 rounded-lg transition-all duration-500 hover:scale-110 active:scale-95 focus:outline-none"
              >
                {/* Animated background layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-lg blur-md"></div>
                <div className="absolute inset-0 bg-gradient-to-45 from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg transform -skew-x-12 group-hover:animate-pulse"></div>
                
                {/* Text content */}
                <div className="relative z-10 transition-all duration-500 group-hover:text-white group-hover:translate-y-[-2px] group-hover:tracking-wider">
                  {item.name}
                </div>
                
                {/* Particle effect simulation */}
                <div className="absolute top-0 left-0 w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>
                <div className="absolute top-0 right-0 w-1 h-1 bg-neon-purple rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-ping" style={{animationDelay: '0.2s'}}></div>
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-neon-pink rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-ping" style={{animationDelay: '0.4s'}}></div>
                <div className="absolute bottom-0 right-0 w-1 h-1 bg-neon-cyan rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping" style={{animationDelay: '0.6s'}}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}