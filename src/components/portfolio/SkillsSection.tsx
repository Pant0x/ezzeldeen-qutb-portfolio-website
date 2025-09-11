import { TerminalSection } from "../TerminalSection"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & ML",
      icon: "🤖",
      skills: [
        { name: "Computer Vision", level: 5 },
        { name: "Deep Learning", level: 4 },
        { name: "Machine Learning", level: 5 },
        { name: "TensorFlow", level: 4 },
        { name: "PyTorch", level: 4 },
        { name: "OpenCV", level: 5 }
      ]
    },
    {
      title: "Data Science", 
      icon: "📊",
      skills: [
        { name: "Data Preprocessing", level: 5 },
        { name: "EDA", level: 4 },
        { name: "Data Visualization", level: 4 },
        { name: "Data Engineering", level: 3 },
        { name: "Power BI", level: 3 },
        { name: "Excel", level: 4 }
      ]
    },
    {
      title: "Programming & Tools",
      icon: "💻", 
      skills: [
        { name: "Python", level: 5 },
        { name: "NumPy", level: 5 },
        { name: "Pandas", level: 5 },
        { name: "Matplotlib", level: 4 },
        { name: "Scikit-learn", level: 4 },
        { name: "Seaborn", level: 4 },
        { name: "SQLite", level: 3 },
        { name: "Azure AI", level: 3 },
        { name: "Web Development", level: 3 },
        { name: "Game Development", level: 4 },
        { name: "CyberSecurity", level: 3 }
      ]
    },
    {
      title: "Soft Skills",
      icon: "🎯",
      skills: [
        { name: "Problem Solving", level: 5 },
        { name: "Analytical Thinking", level: 5 },
        { name: "Adaptability", level: 4 },
        { name: "Time Management", level: 4 },
        { name: "Team Work", level: 4 },
        { name: "Communication", level: 4 },
        { name: "Touch Typing", level: 5 },
        { name: "Git/GitHub", level: 4 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative cyber-grid">
      {/* ASCII Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="ascii-art absolute top-10 left-20 text-neon-blue matrix-rain">
          {`    ╔═══════╗
    ║ SKILLS║
    ║ & EXP ║
    ╚═══════╝`}
        </div>
        <div className="ascii-art absolute bottom-20 right-20 text-neon-purple matrix-rain" style={{animationDelay: '0.5s'}}>
          {`◇ EXPERTISE ◇
│ TECHNICAL │
◇ KNOWLEDGE ◇`}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <TerminalSection title="skills_matrix.py" className="mb-12 neon-card">
          <div className="font-mono text-sm mb-8">
            <div className="ascii-art text-neon-cyan mb-4">
              {`# ═══════════════════════════════════════════════════════════
#                 SKILLS AND EXPERTISE  
# ═══════════════════════════════════════════════════════════`}
            </div>
            <div className="text-muted-foreground text-neon-blue">skills_data = {'{'}</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-2 font-mono">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                  <span className="text-neon-purple font-bold neon-text">
                    "{category.title}":
                  </span>
                </div>
                
                <div className="neon-card bg-card/50 p-4 space-y-3 group hover:bg-card/70 transition-all">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="font-mono text-sm flex items-center justify-between">
                      <span className="text-neon-blue cyber-text">"{skill.name}"</span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 border transition-all hover:scale-125 ${
                              i < skill.level 
                                ? 'bg-neon-blue border-neon-blue shadow-[0_0_8px_hsl(var(--neon-blue)),0_0_15px_hsl(var(--neon-blue)/0.5)] animate-pulse' 
                                : 'bg-background/20 border-neon-purple/30 shadow-[0_0_2px_hsl(var(--muted-foreground)/0.2)]'
                            } mr-1`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* ASCII decoration for each card */}
                  <div className="ascii-art text-center text-neon-purple/30 text-xs mt-3">
                    ◆─◆─◆─◆─◆
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="font-mono text-sm text-muted-foreground mb-4">
            <div className="text-neon-blue">{'}'}</div>
          </div>

          {/* Skill Level Legend */}
          <div className="neon-card bg-card/30 p-4">
            <div className="ascii-art text-neon-cyan text-xs mb-2">
              {`# ═══ SKILL LEVEL LEGEND ═══`}
            </div>
            <div className="flex items-center justify-center gap-8 text-sm font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-blue border-neon-blue shadow-[0_0_8px_hsl(var(--neon-blue)),0_0_15px_hsl(var(--neon-blue)/0.5)] animate-pulse"></div>
                <span className="text-neon-blue">Proficient</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-background/20 border border-neon-purple/30 shadow-[0_0_2px_hsl(var(--muted-foreground)/0.2)]"></div>
                <span className="text-muted-foreground">Learning</span>
              </div>
            </div>
          </div>
        </TerminalSection>
      </div>
    </section>
  )
}