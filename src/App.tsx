import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
// import { AnimatedCursor } from "@/components/AnimatedCursor";
// Temporary debug overlay to confirm React content is mounting on desktop
const DebugOverlay = () => {
  if (import.meta.env.PROD) return null; // only show in dev
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      padding: '4px 8px',
      fontSize: 12,
      fontFamily: 'monospace',
      background: 'rgba(200,0,255,0.15)',
      color: '#0ff',
      zIndex: 9999,
      pointerEvents: 'none'
    }}>APP MOUNTED</div>
  )
}
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <TooltipProvider>
  {/** Temporarily disable custom cursor to test blank desktop issue */}
  {/* <AnimatedCursor /> */}
  <DebugOverlay />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
