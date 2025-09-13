import { useState, useEffect } from "react"
import { X, Download, ExternalLink, ZoomIn, ZoomOut } from "lucide-react"

interface CustomPDFViewerProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title?: string
}

export function CustomPDFViewer({ isOpen, onClose, pdfUrl, title = "Portfolio" }: CustomPDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [zoomLevel, setZoomLevel] = useState(100)

  // Handle Escape key to close popup (desktop only)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      // Enable keyboard shortcuts on desktop (screen width >= 768px)
      if (window.innerWidth >= 768) {
        document.addEventListener('keydown', handleKeyDown)
      }
      document.body.style.overflow = 'hidden'
      setIsLoading(true)
      setZoomLevel(100)
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

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with cyberpunk effect */}
      <div 
        className="absolute inset-0 bg-background/90 backdrop-blur-md"
        onClick={onClose}
        style={{
          background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 0%, rgba(0, 0, 0, 0.8) 70%)'
        }}
      />
      
      {/* Modal */}
      <div className="relative w-[96vw] h-[96vh] max-w-7xl bg-background/95 backdrop-blur-sm rounded-xl border border-neon-purple/50 shadow-[0_0_50px_hsl(var(--neon-purple)/0.3)] overflow-hidden">
        {/* Glowing edges */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/20 via-transparent to-neon-pink/20 opacity-50 blur-sm"></div>
        
        {/* Header */}
        <div className="relative flex items-center justify-between p-4 border-b border-neon-purple/30 bg-card/40 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="text-3xl animate-pulse">📂</div>
            <div>
              <h2 className="font-mono font-bold text-xl neon-text">{title}</h2>
              <div className="ascii-art text-xs text-neon-cyan/70 mt-1">
                ◆ NEURAL_PORTFOLIO.PDF ◆ {zoomLevel}% ◆
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 mr-4">
              <button
                onClick={handleZoomOut}
                className="pixel-border font-mono font-bold px-2 py-1 text-sm bg-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-75"
                title="Zoom Out"
              >
                <ZoomOut className="h-3 w-3" />
              </button>
              <span className="font-mono text-xs text-muted-foreground px-2 min-w-[3rem] text-center">
                {zoomLevel}%
              </span>
              <button
                onClick={handleZoomIn}
                className="pixel-border font-mono font-bold px-2 py-1 text-sm bg-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-75"
                title="Zoom In"
              >
                <ZoomIn className="h-3 w-3" />
              </button>
            </div>

            {/* Action Buttons */}
            <button
              onClick={handleDownload}
              className="pixel-border font-mono font-bold px-3 py-2 text-sm bg-terminal-green/80 text-background hover:bg-terminal-green hover:scale-105 transition-all duration-75 inline-flex items-center gap-2"
              title="Download PDF"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            
            <button
              onClick={handleOpenInNewTab}
              className="pixel-border font-mono font-bold px-3 py-2 text-sm border border-neon-blue bg-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-background hover:scale-105 transition-all duration-75 inline-flex items-center gap-2"
              title="Open in New Tab"
            >
              <ExternalLink className="h-4 w-4" />
              New Tab
            </button>
            
            <button
              onClick={onClose}
              className="pixel-border font-mono font-bold px-3 py-2 text-sm border border-destructive bg-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground hover:scale-105 transition-all duration-75"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="relative w-full h-[calc(100%-5rem)] bg-background/30 flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-background/60 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-12 h-12 border-4 border-neon-purple border-t-transparent rounded-full animate-spin mx-auto"></div>
                <div className="space-y-2">
                  <p className="font-mono text-lg text-neon-purple font-bold">LOADING PORTFOLIO</p>
                  <div className="ascii-art text-neon-cyan text-sm animate-pulse">
                    {`◆─◇─◆ INITIALIZING NEURAL NETWORK ◆─◇─◆`}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* PDF Container */}
          <div className="w-full h-full flex items-center justify-center p-4">
            <div 
              className="bg-white shadow-2xl rounded-lg overflow-hidden border-2 border-neon-purple/30"
              style={{
                width: `${zoomLevel}%`,
                height: `${zoomLevel}%`,
                maxWidth: '100%',
                maxHeight: '100%',
                transition: 'all 0.3s ease'
              }}
            >
              <object
                data={pdfUrl}
                type="application/pdf"
                className="w-full h-full"
                onLoad={() => setIsLoading(false)}
              >
                <embed
                  src={pdfUrl}
                  type="application/pdf"
                  className="w-full h-full"
                />
                <div className="flex items-center justify-center h-full bg-card/80 text-center p-8">
                  <div className="space-y-4">
                    <p className="font-mono text-muted-foreground">
                      PDF viewer not supported in this browser.
                    </p>
                    <button
                      onClick={() => window.open('/portfolio-viewer.html', '_blank')}
                      className="pixel-border font-mono font-bold px-4 py-2 bg-neon-blue text-background hover:scale-105 transition-all"
                    >
                      Open in New Tab
                    </button>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </div>
        
        {/* Status Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-neon-purple/30 p-2">
          <div className="ascii-art text-center text-neon-cyan/50 text-xs">
            ┌─ CYBERPUNK PDF VIEWER v2.0 ─ Press ESC to exit ─ Scroll to zoom ─┐
          </div>
        </div>
      </div>
    </div>
  )
}
