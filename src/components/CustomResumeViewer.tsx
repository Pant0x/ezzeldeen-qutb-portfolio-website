import { useState, useEffect } from "react"
import { X, Download, ExternalLink, ZoomIn, ZoomOut } from "lucide-react"

interface CustomResumeViewerProps {
  isOpen: boolean
  onClose: () => void
  pdfUrl: string
  title?: string
}

export function CustomResumeViewer({ isOpen, onClose, pdfUrl, title = "Resume" }: CustomResumeViewerProps) {
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
      // Only enable keyboard shortcuts on devices with hover support (desktop)
      if (window.matchMedia('(hover: hover)').matches) {
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
    link.download = 'Ezzeldeen_Qutb_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open('/resume-viewer.html', '_blank')
  }

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full h-full max-w-7xl max-h-[95vh] m-4 pixel-border bg-background shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b pixel-border bg-card">
          <div className="flex items-center gap-3">
            <div className="text-lg font-mono font-bold text-neon-cyan cyber-text">
              {title} Viewer
            </div>
            <div className="text-sm text-muted-foreground font-mono">
              {zoomLevel}%
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <button
              onClick={handleZoomOut}
              className="pixel-border font-mono font-bold px-2 py-1 text-sm bg-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-75"
              disabled={zoomLevel <= 50}
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            
            <button
              onClick={handleZoomIn}
              className="pixel-border font-mono font-bold px-2 py-1 text-sm bg-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-75"
              disabled={zoomLevel >= 200}
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            
            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="pixel-border font-mono font-bold px-3 py-2 text-sm bg-terminal-green/80 text-background hover:bg-terminal-green hover:scale-105 transition-all duration-75 inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download
            </button>
            
            {/* Open in New Tab */}
            <button
              onClick={handleOpenInNewTab}
              className="pixel-border font-mono font-bold px-3 py-2 text-sm border border-neon-blue bg-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-background hover:scale-105 transition-all duration-75 inline-flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              New Tab
            </button>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="pixel-border font-mono font-bold px-3 py-2 text-sm border border-destructive bg-destructive/20 text-destructive hover:bg-destructive hover:text-destructive-foreground hover:scale-105 transition-all duration-75"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* PDF Viewer */}
        <div className="relative w-full h-[calc(100%-80px)] bg-muted/20 overflow-auto">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
              <div className="text-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-cyan mx-auto"></div>
                <p className="text-sm font-mono text-muted-foreground">Loading Resume...</p>
              </div>
            </div>
          )}
          
          <div className="w-full h-full p-4 flex justify-center">
            <div 
              className="shadow-2xl pixel-border bg-white"
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
            >
              <object
                data={pdfUrl}
                type="application/pdf"
                className="w-[800px] h-[1000px] block"
                onLoad={() => setIsLoading(false)}
              >
                <embed
                  src={pdfUrl}
                  type="application/pdf"
                  className="w-[800px] h-[1000px] block"
                />
                <div className="w-[800px] h-[1000px] flex items-center justify-center bg-muted pixel-border">
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground font-mono">
                      Your browser doesn't support PDF viewing.
                    </p>
                    <button
                      onClick={handleDownload}
                      className="pixel-border font-mono font-bold px-4 py-2 bg-neon-blue text-background hover:scale-105 transition-all"
                    >
                      Download Resume Instead
                    </button>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
