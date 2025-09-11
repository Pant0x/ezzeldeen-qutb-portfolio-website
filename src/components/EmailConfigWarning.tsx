import { useEffect, useState } from 'react'

interface Status {
  hasKey: boolean
  to?: string
  error?: string
}

export function EmailConfigWarning() {
  const [status, setStatus] = useState<Status | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch('/api/email-status').then(r => r.json()).then(d => { if(!cancelled) setStatus(d) }).catch(()=>{
      if(!cancelled) setStatus({ hasKey: false, error: 'Server not reachable' })
    })
    return () => { cancelled = true }
  }, [])

  if (!status) return null
  if (status.hasKey) return null

  return (
    <div className="mb-6 border-2 border-yellow-500/60 bg-yellow-500/10 text-yellow-300 font-mono text-xs p-3 rounded animate-pulse">
      <strong>EMAIL DISABLED:</strong> Missing RESEND_API_KEY on server. Messages cannot be sent.
      <div className="mt-1 opacity-80">
        Fix: Create .env with RESEND_API_KEY=your_key and TO_EMAIL=you@example.com then restart backend (npm run serve).
      </div>
    </div>
  )
}