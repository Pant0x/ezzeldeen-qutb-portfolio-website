import express from 'express'
import { Resend } from 'resend'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
app.use(express.json())

const RESEND_API_KEY = process.env.RESEND_API_KEY
const TO_EMAIL = process.env.TO_EMAIL || 'ezzeldeen2005mq@gmail.com'

console.log('[server] RESEND_API_KEY set:', !!RESEND_API_KEY)
console.log('[server] TO_EMAIL:', TO_EMAIL)

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', hasResendKey: !!RESEND_API_KEY })
})

// Email status endpoint
app.get('/api/email-status', (req, res) => {
  res.json({ 
    hasKey: !!RESEND_API_KEY, 
    to: TO_EMAIL,
    keyLength: RESEND_API_KEY ? RESEND_API_KEY.length : 0
  })
})

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    if (!resend) {
      return res.status(500).json({ error: 'Email service not configured (missing RESEND_API_KEY)' })
    }

    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, subject, message' })
    }

    console.log('[mail] Incoming request:', { name, email, subject, messageLength: message.length })

    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [TO_EMAIL],
      reply_to: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <h3>New message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, '<br>').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
      `
    })

    if (result.error) {
      console.error('[mail] Resend error:', result.error)
      return res.status(500).json({ error: result.error.message })
    }

    console.log('[mail] Email sent successfully:', result.data?.id)
    res.json({ success: true, id: result.data?.id })

  } catch (error) {
    console.error('[mail] Send failed:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

const PORT = process.env.PORT || 5174
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log('Available endpoints:')
  console.log('  GET  /api/health')
  console.log('  GET  /api/email-status') 
  console.log('  POST /api/send-email')
})
