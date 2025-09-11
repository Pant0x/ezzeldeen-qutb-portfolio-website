import { useState } from 'react'
import { TerminalSection } from '@/components/TerminalSection'
import { Mail } from 'lucide-react'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export function GetInTouchSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [error, setError] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending'); setError('')
    try {
      // Use Netlify function endpoint
      const res = await fetch('/.netlify/functions/send-email', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(form) 
      })
      if (!res.ok) {
        let msg = 'Failed to send'
        try { const data = await res.json(); if (data?.error) msg = data.error } catch {}
        throw new Error(msg)
      }
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err: any) {
      setStatus('error'); setError(err.message || 'Error')
    }
  }

  return (
    <section id="get-in-touch" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-background/40 relative cyber-grid">
      <div className="max-w-4xl mx-auto">
        <TerminalSection title="get_in_touch.py" className="neon-card">
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold neon-text neon-pulse">Get In Touch</h2>
              <p className="text-muted-foreground font-mono text-sm max-w-2xl mx-auto">Have a project, idea, or collaboration in mind? Send me a message below and it will arrive in my inbox securely.</p>
            </div>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-neon-purple" htmlFor="name">NAME</label>
                  <input id="name" name="name" required value={form.name} onChange={onChange} className="pixel-border w-full bg-background/60 px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neon-purple/60" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-xs text-neon-purple" htmlFor="email">EMAIL</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="pixel-border w-full bg-background/60 px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neon-purple/60" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-neon-purple" htmlFor="subject">SUBJECT</label>
                <input id="subject" name="subject" required value={form.subject} onChange={onChange} className="pixel-border w-full bg-background/60 px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-neon-purple/60" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs text-neon-purple" htmlFor="message">MESSAGE</label>
                <textarea id="message" name="message" rows={6} required value={form.message} onChange={onChange} className="pixel-border w-full bg-background/60 px-3 py-2 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-neon-purple/60" />
              </div>
              <div className="flex items-center gap-4">
                <button disabled={status==='sending' || status==='sent'} aria-busy={status==='sending'} className="pixel-border bg-terminal-green disabled:opacity-70 disabled:cursor-not-allowed text-background font-mono font-bold px-6 py-3 text-sm inline-flex items-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_hsl(var(--border))] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                  <Mail className="h-4 w-4" />
                  {status==='sending' ? 'Sending...' : status==='sent' ? 'Sent!' : 'Send Message'}
                </button>
                {status==='error' && <span className="text-xs text-red-500 font-mono">{error}</span>}
                {status==='sent' && <span className="text-xs text-neon-cyan font-mono">Delivered ✓</span>}
              </div>
            </form>
            <div className="text-center font-mono text-xs text-muted-foreground pt-4 border-t border-neon-purple/30">Feel free to ask me anything {'<3'}.</div>
          </div>
        </TerminalSection>
      </div>
    </section>
  )
}
