import { TerminalSection } from "../TerminalSection"

export function ServicesSection() {
  const services = [
    {
      title: "MACHINE LEARNING & AI SOLUTIONS",
      icon: "🤖",
      services: [
        "Model training & deployment",
        "Predictive analytics and classification models",
        "Computer Vision projects (object detection, recognition, image analysis)"
      ]
    },
    {
      title: "DATA SCIENCE & AUTOMATION", 
      icon: "📊",
      services: [
        "Data cleaning, preprocessing, and visualization",
        "Web scraping & automated pipelines",
        "Dashboards and reporting"
      ]
    },
    {
      title: "PROGRAMMING & DEVELOPMENT",
      icon: "💻", 
      services: [
        "Build robust and scalable applications tailored to your needs",
        "Develop custom web tools and backend scripts for efficient workflows",
        "Integrate APIs and automation pipelines to streamline processes",
        "Deliver end-to-end software solutions that turn ideas into reliable systems"
      ]
    }
  ]

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative cyber-grid">
      {/* ASCII Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="ascii-art absolute top-20 left-10 text-neon-cyan matrix-rain">
          {`    ╭──────────╮
    │ SERVICES │
    │    API   │
    ╰──────────╯`}
        </div>
        <div className="ascii-art absolute bottom-20 right-10 text-neon-pink matrix-rain" style={{animationDelay: '0.7s'}}>
          {`◇ SOLUTIONS ◇
│ DELIVERY  │
◇ QUALITY  ◇`}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <TerminalSection title="services.json" className="mb-12 neon-card">
          <div className="ascii-art text-neon-cyan mb-8">
            {`# ═══════════════════════════════════════════════════════════
#                      SERVICES
# ═══════════════════════════════════════════════════════════`}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="neon-card bg-card/50 p-6 space-y-6 group hover:bg-card/70 transition-all">
                {/* Service Header */}
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold neon-text font-mono leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* ASCII Separator */}
                <div className="ascii-art text-center text-neon-blue/50 text-xs">
                  ◆─◆─◆─◆─◆─◆─◆
                </div>

                {/* Service List */}
                <div className="space-y-3">
                  {service.services.map((item, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-start gap-2">
                      <span className="text-neon-purple text-sm mt-1">▶</span>
                      <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ASCII Footer */}
                <div className="ascii-art text-center text-neon-purple/30 text-xs">
                  ◇═══◇═══◇═══◇
                </div>
              </div>
            ))}
          </div>

          {/* Bottom ASCII Art */}
          <div className="ascii-art text-center text-neon-blue/50 mt-12 text-xs">
            {`┌───────────────────────────────────────────────────────────────┐
│                   READY TO BUILD TOGETHER?                   │
└───────────────────────────────────────────────────────────────┘`}
          </div>
        </TerminalSection>
      </div>
    </section>
  )
}