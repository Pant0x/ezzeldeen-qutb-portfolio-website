import { TerminalSection } from "../TerminalSection"

export function WorkExperienceSection() {
  const experiences = [
    {
      title: "Computer Vision Trainee",
      company: "National Telecommunication Institute (NTI)",
      period: "Aug 2025 - Sep 2025",
      description: "Gained hands-on experience in computer vision projects and practical AI implementations.",
      icon: "🔬"
    },
    {
      title: "Computer Vision Trainee",
      company: "Information Technology Institute (ITI)",
      period: "Jun 2025 - Jul 2025", 
      description: "Developed and tested computer vision models, improving image and video analysis workflows.",
      icon: "👁️"
    },
    {
      title: "Machine Learning Intern",
      company: "Elevvo Pathways",
      period: "Aug 2025 - Sep 2025",
      description: "Applied machine learning techniques to real-world datasets and contributed to model development.",
      icon: "🤖"
    },
    {
      title: "AI & Data Science Engineering Intern",
      company: "IEEE",
      period: "Nov 2024 - Feb 2025",
      description: "Worked on AI and data science projects, including data preprocessing, visualization, and predictive modeling.",
      icon: "⚡"
    }
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/10 relative cyber-grid">
      {/* ASCII Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="ascii-art absolute top-10 right-20 text-neon-blue matrix-rain">
          {`    ╔═══════╗
    ║ WORK  ║
    ║ EXP.  ║
    ╚═══════╝`}
        </div>
        <div className="ascii-art absolute bottom-10 left-10 text-neon-purple matrix-rain" style={{animationDelay: '1s'}}>
          {`★ ═══ CAREER ═══ ★`}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <TerminalSection title="experience.log" className="mb-12 neon-card">
          <div className="ascii-art text-neon-purple mb-8">
            {`# ═══════════════════════════════════════════════════════════
#                    WORK EXPERIENCE
# ═══════════════════════════════════════════════════════════`}
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="neon-card bg-card/50 p-6 group hover:bg-card/70 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{exp.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold neon-text">
                        {exp.title}
                      </h3>
                      <div className="text-neon-cyan font-mono text-sm">
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="text-neon-blue font-mono font-bold mb-3">
                      {exp.company}
                    </div>
                    
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* ASCII decoration */}
                    <div className="ascii-art text-xs text-neon-purple/30 mt-3">
                      ◆─◆─◆─◆─◆─◆─◆─◆─◆
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ASCII footer */}
          <div className="ascii-art text-center text-neon-blue/50 mt-8 text-xs">
            {`┌─────────────────────────────────────────────────────────┐
│                    CAREER TIMELINE                     │
└─────────────────────────────────────────────────────────┘`}
          </div>
        </TerminalSection>
      </div>
    </section>
  )
}