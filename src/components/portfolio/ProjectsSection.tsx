import { TerminalSection } from "../TerminalSection"
import { PixelButton } from "../PixelButton"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Diabetic Retinopathy Detection",
      description: "Detects eye disease from retinal images using AI. Designed and trained CNNs with transfer learning to extract features from medical images and improve classification accuracy.",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
      github: "https://github.com/Pant0x/diabetic-retinopathy-detection-NTI-project",
      live: "#",
      icon: "👁️"
    },
    {
      title: "Heart Disease AI Detector", 
      description: "Predicts heart disease risks from patient data. A Machine Learning classifier that predicts the likelihood of heart disease based on patient health data using supervised learning.",
      tech: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Matplotlib"],
      github: "https://github.com/Pant0x/Heart_Disease_AiDetector",
      live: "#",
      icon: "❤️"
    },
    {
      title: "PanCake MusicBot (AI-Powered)",
      description: "AI bot that curates and streams music. A Discord-based music bot with AI-enhanced features to provide smarter, more engaging user interactions with intelligent playlist recommendations.",
      tech: ["Python", "Discord API", "ML libraries", "Scikit-learn", "TensorFlow", "SQLite"],
      github: "https://github.com/Pant0x/PanCake_MusicBot", 
      live: "#",
      icon: "🎵"
    },
    {
      title: "Automated Web/Data Scrapper",
      description: "Extracts and organizes web data automatically. Built for efficient data collection and processing with automated pipelines for structured data extraction.",
      tech: ["Python", "BeautifulSoup", "Selenium", "Pandas", "Requests"],
      github: "https://github.com/Pant0x/Elevvo-Machine-Learning-Projects",
      live: "#",
      icon: "🕷️"
    }
  ]

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative cyber-grid">
      {/* ASCII Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="ascii-art absolute top-20 left-10 text-neon-cyan matrix-rain">
          {`    ╔═══════════╗
    ║ PROJECTS  ║
    ║ SHOWCASE  ║
    ╚═══════════╝`}
        </div>
        <div className="ascii-art absolute bottom-10 right-20 text-neon-pink matrix-rain" style={{animationDelay: '0.8s'}}>
          {`◇ AI/ML ◇
│ PROJECTS │
◇ PORTFOLIO ◇`}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <TerminalSection title="project_showcase.py" className="mb-12 neon-card">
          <div className="font-mono text-sm mb-8">
            <div className="ascii-art text-neon-purple mb-4">
              {`# ═══════════════════════════════════════════════════════════
#                   PROJECT SHOWCASE
#                   MY KEY PROJECTS
# ═══════════════════════════════════════════════════════════`}
            </div>
            <div className="text-muted-foreground text-neon-cyan mb-2">
              projects = [
            </div>
            <div className="text-xs text-neon-blue ml-4">
              # Here's a quick glance at the four projects I've worked on, showcasing my skills in AI, Machine Learning, Data Science, and Computer Vision.
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="neon-card bg-card/50 hover:bg-card/70 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {project.icon}
                      </span>
                      <h3 className="font-mono font-bold text-lg neon-text group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PixelButton variant="outline" size="sm" title="Show Project" className="hover:shadow-[0_0_10px_hsl(var(--neon-purple)/0.5)]">
                          <ExternalLink className="h-4 w-4" />
                        </PixelButton>
                      </a>
                    </div>
                  </div>

                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="code-highlight font-mono text-xs px-2 py-1 hover:shadow-[0_0_8px_hsl(var(--neon-blue)/0.3)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ASCII project separator */}
                  <div className="ascii-art text-center text-neon-purple/30 text-xs">
                    ◆─◆─◆─◆─◆─◆─◆─◆
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-muted-foreground text-neon-cyan text-sm mt-8">
            ]
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/Pant0x?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PixelButton variant="terminal" size="lg" className="neon-glow hover:shadow-[0_0_25px_hsl(var(--neon-purple)/0.6)]">
                <Github className="h-5 w-5 mr-2" />
                View All Projects on GitHub
              </PixelButton>
            </a>
          </div>

          {/* ASCII footer */}
          <div className="ascii-art text-center text-neon-blue/50 mt-8 text-xs">
            {`┌─────────────────────────────────────────────────────────────┐
│          Click on each project to dive deeper              │
└─────────────────────────────────────────────────────────────┘`}
          </div>
        </TerminalSection>
      </div>
    </section>
  )
}