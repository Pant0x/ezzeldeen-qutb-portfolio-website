import { TerminalSection } from "../TerminalSection"
import { Youtube, Palette } from "lucide-react"

export function AboutSection() {
  const stats = [
    { label: "University Year", value: "3rd", unit: "year" },
    { label: "Projects Built", value: "4+", unit: "proj" },
    { label: "AI Models Trained", value: "15+", unit: "models" },
    { label: "Lines of Code", value: "∞", unit: "lines" }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative cyber-grid">
      {/* ASCII Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="ascii-art absolute top-20 left-10 text-neon-blue">
          {`    ╭─────────╮
    │ ABOUT.AI │
    ╰─────────╯`}
        </div>
        <div className="ascii-art absolute bottom-20 right-10 text-neon-purple">
          {`◇ DATA ◇
│ SCIENCE │
◇ ML/AI ◇`}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <TerminalSection title="introduction.py" className="mb-12 neon-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="font-mono text-sm">
                <div className="text-neon-blue mb-4 ascii-art">
                  {`# ═══ INTRODUCTION ═══`}
                </div>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p className="cyber-text">
                    I'm <span className="neon-text">Ezzeldeen Qutb</span>, an AI & ML Engineer with a passion for 
                    Computer Vision. I build intelligent systems that can see, understand, and act on 
                    visual data, helping businesses turn raw information into actionable insights.
                  </p>
                  <p>
                    My work spans the full data science workflow from cleaning and exploring datasets 
                    to creating meaningful visualizations and I use <span className="code-highlight">machine learning</span> to 
                    tackle real-world problems, bridging the gap between data and solutions.
                  </p>
                  <p>
                    I also bring a creative edge from my background in <span className="code-highlight">music production</span>, 
                    <span className="code-highlight"> video editing</span>, and <span className="code-highlight"> graphic design</span>, 
                    giving me a unique perspective on how technology and creativity intersect.
                  </p>
                  
                  {/* Creative Portfolio Links */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-neon-purple/20">
                    <div className="text-sm font-mono text-neon-cyan">Creative Work:</div>
                    <div className="flex gap-3">
                      <a
                        href="https://www.youtube.com/@prodbypanto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 pixel-border font-mono font-bold px-3 py-2 text-sm bg-background text-foreground hover:bg-red-600 hover:text-white shadow-pixel hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75"
                      >
                        <Youtube className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline">YouTube</span>
                      </a>
                      
                      <a
                        href="https://www.behance.net/ezzeldeenqutb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 pixel-border font-mono font-bold px-3 py-2 text-sm bg-background text-foreground hover:bg-blue-600 hover:text-white shadow-pixel hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-75"
                      >
                        <Palette className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span className="hidden sm:inline">Behance</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="neon-card bg-secondary/10 p-4 text-center group hover:bg-secondary/20 transition-all">
                  <div className="font-mono font-bold text-xl sm:text-2xl neon-text neon-pulse">
                    {stat.value}
                  </div>
                  <div className="font-mono text-xs text-neon-cyan uppercase mt-1">
                    {stat.unit}
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-foreground mt-2">
                    {stat.label}
                  </div>
                  {/* ASCII decoration */}
                  <div className="ascii-art text-xs text-neon-blue/50 mt-2">
                    ◆─◆─◆
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Background */}
          <div className="mt-12 pt-8 border-t border-neon-purple/30">
            <div className="ascii-art text-neon-purple mb-4">
              {`# ═══ EDUCATION ═══`}
            </div>
            <div className="neon-card bg-card/50 p-6">
              <h3 className="text-xl font-bold neon-text mb-2">
                B.Sc. in Artificial Intelligence and Data Science
              </h3>
              <p className="text-neon-cyan font-mono mb-2">
                Zagazig National University | Expected Graduation: June 2027
              </p>
              
              <div className="mt-4">
                <p className="text-sm font-mono text-muted-foreground mb-3">Relevant Courses & Certifications:</p>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-neon-blue">▶</span>
                    <span>Data Science Essentials with Python – <span className="code-highlight">Cisco Networking Academy</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neon-purple">▶</span>
                    <span>AI and Machine Learning – <span className="code-highlight">Sprints</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neon-cyan">▶</span>
                    <span>Getting Started with Deep Learning – <span className="code-highlight">NVIDIA</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-neon-pink">▶</span>
                    <span>Algorithm Analysis & Design – <span className="code-highlight">Udemy</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TerminalSection>
      </div>
    </section>
  )
}