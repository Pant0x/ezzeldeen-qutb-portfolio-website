import { useState, useEffect } from "react"
import { Github, Linkedin, Instagram } from "lucide-react"
// Removed PixelButton usage; custom buttons defined inline
import { TerminalSection } from "../TerminalSection"
import { CustomPDFViewer } from "../CustomPDFViewer"
import { CustomResumeViewer } from "../CustomResumeViewer"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [isPDFOpen, setIsPDFOpen] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const fullText = "AI AND ML ENGINEER"
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  // Persistent "press any key" (keyboard only) auto-jump to About when near top
  useEffect(() => {
    const onKey = () => {
      if (window.scrollY > 100) return
      const about = document.querySelector('#about')
      if (about) about.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 cyber-grid relative overflow-hidden">
      {/* ASCII Art Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="ascii-art absolute top-10 left-10 text-neon-blue matrix-rain">
          {`    ╔══╗
    ║██║
    ╚══╝`}
        </div>
        <div className="ascii-art absolute top-20 right-20 text-neon-purple matrix-rain" style={{animationDelay: '0.5s'}}>
          {`◆ ◇ ◆
◇ ◆ ◇
◆ ◇ ◆`}
        </div>
        <div className="ascii-art absolute bottom-20 left-1/4 text-neon-cyan matrix-rain" style={{animationDelay: '1s'}}>
          ★ ✦ ★
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <TerminalSection className="mb-8 neon-card">
          <div className="space-y-8">
            {/* Terminal Header */}
            <div className="font-mono">
              <div className="text-sm text-muted-foreground mb-4 text-left">
                <span className="text-terminal-green">ezzeldeen@ai-portfolio</span>
                <span className="text-neon-blue">:</span>
                <span className="text-neon-purple">~</span>
                <span className="text-foreground">$ whoami</span>
              </div>
              
              {/* Main Title with ASCII decoration */}
              <div className="relative">
                <div className="ascii-art text-neon-blue text-xs mb-2">
                  {`    ★ ═══════════════════════════════════════ ★`}
                </div>
                <div className="text-4xl md:text-6xl font-bold mb-2">
                  <span className="neon-text neon-pulse">EZZELDEEN QUTB</span>
                </div>
                <div className="ascii-art text-neon-purple text-xs mb-4">
                  {`    ◆ ═══════════════════════════════════════ ◆`}
                </div>
              </div>
              
              <div className="text-xl md:text-2xl mb-4">
                <span className="code-highlight cyber-text">{typedText}</span>
                <span className="animate-pulse text-neon-cyan text-2xl">█</span>
              </div>
            </div>
            
            <div className="text-muted-foreground font-mono text-sm max-w-3xl mx-auto space-y-2">
              <p className="cyber-text">Building intelligent systems that can see, understand, and act on visual data</p>
              <p className="cyber-text">Bridging the gap between data and solutions with AI & Machine Learning</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                onClick={() => setIsPDFOpen(true)}
                className="pixel-border font-mono font-bold inline-flex items-center justify-center px-6 py-3 text-base bg-terminal-green text-background shadow-pixel hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75 neon-glow"
              >
                📂 View Portfolio
              </button>
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="pixel-border font-mono font-bold inline-flex items-center justify-center px-6 py-3 text-base border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-pixel hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75"
              >
                📄 View Resume
              </button>
            </div>

            {/* Social Media Links */}
            <div className="border-t border-neon-blue/30 pt-6">
              <div className="flex items-center justify-center gap-6">
                {/* GitHub */}
                <a
                  href="https://github.com/Pant0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 pixel-border font-mono font-bold px-4 py-3 text-sm bg-background text-foreground hover:bg-neon-blue hover:text-background shadow-pixel hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ezzeldeenqutb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 pixel-border font-mono font-bold px-4 py-3 text-sm bg-background text-foreground hover:bg-neon-cyan hover:text-background shadow-pixel hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/itsmepanto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 pixel-border font-mono font-bold px-4 py-3 text-sm bg-background text-foreground hover:bg-neon-pink hover:text-background shadow-pixel hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Instagram</span>
                </a>
              </div>
              
              {/* Optional: Add ASCII decoration below */}
              <div className="ascii-art text-center text-neon-blue/30 text-xs mt-4">
                ◆─◆─◆ CONNECT WITH ME ◆─◆─◆
              </div>
            </div>
          </div>
        </TerminalSection>

        <div className="font-mono text-xs text-muted-foreground animate-pulse hidden md:flex items-center justify-center gap-2">
          <span className="text-neon-cyan">{'>'}</span>
          Press any key to enter the matrix...
          <span className="text-neon-purple animate-bounce">_</span>
        </div>
      </div>
      
      {/* Custom PDF Viewer */}
      <CustomPDFViewer 
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        pdfUrl="/portfolio.pdf"
        title="Ezzeldeen Qutb Portfolio"
      />

      {/* Custom Resume Viewer */}
      <CustomResumeViewer 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        pdfUrl="/resume.pdf"
        title="Ezzeldeen Qutb Resume"
      />
    </section>
  )
}