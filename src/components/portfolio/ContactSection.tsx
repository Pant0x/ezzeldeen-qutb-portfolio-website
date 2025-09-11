import { TerminalSection } from "../TerminalSection"
import { PixelButton } from "../PixelButton"
import { Mail, Github, Linkedin, Phone, MapPin, Download } from "lucide-react"

export function ContactSection() {
  const scrollToGetInTouch = () => {
    const element = document.getElementById('get-in-touch');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const downloadPortfolio = () => {
    const link = document.createElement('a');
    link.href = '/portfolio.pdf';
    link.download = 'Ezzeldeen_Qutb_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Ezzeldeen_Qutb_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ezzeldeen2005mq@gmail.com",
      link: "mailto:ezzeldeen2005mq@gmail.com"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub", 
      value: "/Pant0x",
      link: "https://github.com/Pant0x"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "/in/ezzeldeenqutb", 
      link: "https://www.linkedin.com/in/ezzeldeenqutb/"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+20 121 032 2278",
      link: "tel:+201210322278"
    }
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative cyber-grid">
      {/* ASCII Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="ascii-art absolute top-10 left-10 text-neon-cyan matrix-rain">
          {`    ╔═══════════╗
    ║ CONTACT   ║
    ║ NETWORK   ║
    ╚═══════════╝`}
        </div>
        <div className="ascii-art absolute bottom-10 right-10 text-neon-pink matrix-rain" style={{animationDelay: '1.2s'}}>
          {`◇ CONNECT ◇
│ COLLABORATE │
◇ CREATE ◇`}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <TerminalSection title="contact_network.sh" className="mb-12 neon-card">
          <div className="text-center space-y-8">
            <div className="font-mono">
              <div className="ascii-art text-neon-cyan text-sm mb-6">
                {`# ═══════════════════════════════════════════════════════════
#              LET'S BUILD SOMETHING TOGETHER
# ═══════════════════════════════════════════════════════════`}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 neon-text neon-pulse">
                Ready to Start a Project?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto cyber-text leading-relaxed">
                I'm always interested in new opportunities, challenging AI/ML projects, 
                and collaborating with other developers and researchers. Let's turn your data into intelligent solutions!
              </p>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-card bg-card/50 hover:bg-card/70 transition-all duration-300 group text-center p-4 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.3)]"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-neon-blue group-hover:text-neon-cyan transition-colors group-hover:scale-110 transform">
                      {method.icon}
                    </div>
                    <div className="font-mono text-xs text-neon-purple uppercase font-bold">
                      {method.label}
                    </div>
                    <div className="font-mono text-sm font-bold cyber-text break-words text-center min-h-[2.5rem] flex items-center justify-center">
                      {method.value}
                    </div>
                    {/* ASCII decoration */}
                    <div className="ascii-art text-xs text-neon-blue/30">
                      ◆─◆
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Download Buttons Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-2 text-muted-foreground font-mono text-sm">
                <MapPin className="h-4 w-4 text-neon-cyan" />
                <span className="cyber-text">Based in Egypt • Open to Remote Work & Collaboration</span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <PixelButton 
                  variant="terminal" 
                  size="lg"
                  className="neon-glow hover:shadow-[0_0_25px_hsl(var(--neon-purple)/0.6)]"
                  onClick={scrollToGetInTouch}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send me an Email
                </PixelButton>
                
                <PixelButton 
                  variant="outline" 
                  size="lg"
                  className="hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.5)]"
                  onClick={downloadResume}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </PixelButton>
                
                <PixelButton 
                  variant="outline" 
                  size="lg"
                  className="hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)]"
                  onClick={downloadPortfolio}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Portfolio
                </PixelButton>
              </div>
            </div>

            {/* ASCII Footer */}
            <div className="font-mono text-xs text-muted-foreground pt-8 border-t border-neon-purple/30 space-y-3">
              <div className="ascii-art text-neon-blue">
                {`┌─────────────────────────────────────────────────────────┐
│ $ echo "Thanks for exploring my AI/ML portfolio!"      │
└─────────────────────────────────────────────────────────┘`}
              </div>
              <div className="cyber-text">
                © 2024 Ezzeldeen Qutb. Built with React, TypeScript & AI Magic ✨
              </div>
              
              {/* Status indicator */}
              <div className="flex items-center justify-center gap-2 text-xs">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse shadow-[0_0_8px_hsl(var(--neon-blue))]"></div>
                <span className="text-neon-cyan">Status: Available 24/7 for any project</span>
              </div>
            </div>
          </div>
        </TerminalSection>
      </div>
    </section>
  )
}