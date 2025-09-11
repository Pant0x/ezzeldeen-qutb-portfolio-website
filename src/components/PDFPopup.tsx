import { useState, useEffect } from "react"
import { X, Download, ExternalLink } from "lucide-react"

interface PDFPopupProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title?: string
}

export function PDFPopup({ isOpen, onClose, pdfUrl, title = "Portfolio" }: PDFPopupProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Handle Escape key to close popup
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden'
      // Reset loading state when popup opens
      setIsLoading(true)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Ezzeldeen_Qutb_Portfolio.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open('/portfolio-viewer.html', '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-[95vw] h-[95vh] max-w-6xl bg-card/95 backdrop-blur-sm rounded-lg border-2 border-neon-purple shadow-[0_0_30px_hsl(var(--neon-purple)/0.3),inset_0_0_20px_hsl(var(--neon-blue)/0.1)] overflow-hidden">
        {/* Cyberpunk corner decorations */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-neon-cyan"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-neon-cyan"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-neon-cyan"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-neon-cyan"></div>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neon-purple/30 bg-card/80 backdrop-blur-sm relative">
          {/* Header decoration line */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
          
          <div className="flex items-center gap-3">
            <div className="text-2xl animate-pulse">📂</div>
            <div className="space-y-1">
              <h2 className="font-mono font-bold text-lg neon-text">{title}</h2>
              <div className="ascii-art text-xs text-neon-cyan">
                ◆─◆ PORTFOLIO_VIEW.PDF ◆─◆
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="pixel-border font-mono font-bold px-3 py-2 text-sm bg-terminal-green text-background hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75 inline-flex items-center gap-2"
              title="Download PDF"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            
            {/* Open in New Tab Button */}
            <button
              onClick={handleOpenInNewTab}
              className="pixel-border font-mono font-bold px-3 py-2 text-sm border-2 border-neon-blue bg-background text-neon-blue hover:bg-neon-blue hover:text-background hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75 inline-flex items-center gap-2"
              title="Open in New Tab"
            >
              <ExternalLink className="h-4 w-4" />
              New Tab
            </button>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="pixel-border font-mono font-bold px-3 py-2 text-sm border-2 border-destructive bg-background text-destructive hover:bg-destructive hover:text-destructive-foreground hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="relative w-full h-[calc(100%-4rem)] bg-background/50 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/80">
              <div className="text-center space-y-4">
                <div className="w-8 h-8 border-2 border-neon-purple border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="font-mono text-sm text-muted-foreground">Loading Portfolio...</p>
                <div className="ascii-art text-neon-cyan text-xs">
                  {`◆ ◇ ◆ ◇ ◆`}
                </div>
              </div>
            </div>
          )}
          
          {/* Custom PDF Container with Cyberpunk Border */}
          <div className="w-full h-full border-2 border-neon-purple/30 bg-card/20 overflow-hidden rounded-lg shadow-[inset_0_0_20px_hsl(var(--neon-purple)/0.1)]">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0&zoom=FitH`}
              className="w-full h-full border-0 bg-background"
              title={title}
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
              style={{
                filter: 'contrast(1.1) brightness(0.95)',
              }}
            />
            
            {/* Subtle overlay for integration */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/5 via-transparent to-background/5"></div>
          </div>
          
          {/* Custom scroll indicators */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2 opacity-30 hover:opacity-60 transition-opacity">
            <div className="w-1 h-8 bg-neon-cyan rounded-full"></div>
            <div className="w-1 h-4 bg-neon-purple rounded-full"></div>
            <div className="w-1 h-8 bg-neon-pink rounded-full"></div>
          </div>
        </div>
        
        {/* ASCII Footer */}
        <div className="absolute bottom-2 left-4 right-4 z-10">
          <div className="ascii-art text-center text-neon-blue/20 text-xs bg-background/60 backdrop-blur-sm rounded px-4 py-1">
            ┌─── PDF CONTROLS: Use mouse wheel to zoom • Right-click for options ───┐
          </div>
        </div>
      </div>
    </div>
  )
}
