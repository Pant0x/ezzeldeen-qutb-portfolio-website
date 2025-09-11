# 🤖 Ezzeldeen Qutb - AI/ML Engineer Portfolio

A modern, cyberpunk-themed portfolio website showcasing my expertise in Artificial Intelligence and Machine Learning.

## 🚀 Features

- **Interactive Portfolio Viewer** - View my portfolio PDF with custom controls
- **Resume Viewer** - Browse my resume with zoom and download functionality
- **Contact Form** - Secure email contact form powered by Resend API
- **Project Showcase** - Links to my GitHub repositories and live projects
- **Skills Visualization** - Interactive skill level indicators
- **Social Media Integration** - Links to GitHub, LinkedIn, Instagram, YouTube, and Behance
- **Responsive Design** - Optimized for all devices
- **Cyberpunk Theme** - Neon glows, pixel borders, and terminal aesthetics

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Backend**: Express.js + Node.js
- **Email Service**: Resend API
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 🏗️ Project Structure

```
├── src/
│   ├── components/
│   │   ├── portfolio/          # Portfolio sections
│   │   ├── ui/                 # Reusable UI components
│   │   ├── CustomPDFViewer.tsx # Portfolio PDF viewer
│   │   ├── CustomResumeViewer.tsx # Resume PDF viewer
│   │   └── ...
│   ├── pages/
│   ├── hooks/
│   └── lib/
├── public/
│   ├── portfolio.pdf          # Portfolio document
│   ├── resume.pdf            # Resume document
│   ├── portfolio-viewer.html # PDF viewer wrapper
│   └── resume-viewer.html    # Resume viewer wrapper
├── server.js                 # Express API server
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Resend API key (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pant0x/ezzeldeen-qutb-portfolio.git
   cd ezzeldeen-qutb-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   TO_EMAIL=your_email@example.com
   PORT=5175
   ```

4. **Start development servers**
   ```bash
   npm run dev:full
   ```

   This starts both:
   - Frontend (Vite): http://localhost:8080
   - Backend (Express): http://localhost:5175

## 📝 Available Scripts

- `npm run dev` - Start Vite development server only
- `npm run dev:full` - Start both frontend and backend servers
- `npm run serve` - Start Express API server only
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm start` - Start production server

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email functionality | Yes |
| `TO_EMAIL` | Email address to receive contact form messages | Yes |
| `PORT` | Port for the Express server (default: 5175) | No |

## 📧 Contact Form Setup

The contact form uses Resend API for secure email delivery:

1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Add it to your `.env` file
4. Set your destination email address

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up serverless functions for the API endpoints

### Deploy to Railway/Render

1. Connect your GitHub repository
2. Set environment variables
3. Use the start script for production

## 🎨 Customization

### Colors & Theme

The cyberpunk theme colors are defined in `src/index.css`:
- `--neon-blue`: #00f5ff
- `--neon-purple`: #b19cd9
- `--neon-cyan`: #39ff14
- `--terminal-green`: #00ff88

### Content

Update your personal information in:
- `src/components/portfolio/HeroSection.tsx`
- `src/components/portfolio/AboutSection.tsx`
- `src/components/portfolio/ProjectsSection.tsx`
- `src/components/portfolio/SkillsSection.tsx`

## 📱 Features Overview

### Portfolio & Resume Viewers
- Custom PDF viewers with zoom controls
- Download functionality
- Open in new tab option
- Mobile-responsive design

### Contact System
- Secure form validation
- Email delivery via Resend API
- Success/error feedback
- Spam protection

### Project Showcase
- GitHub repository links
- Live demo buttons
- Project descriptions
- Technology tags

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: ezzeldeen2005mq@gmail.com
- **GitHub**: [@Pant0x](https://github.com/Pant0x)
- **LinkedIn**: [ezzeldeenqutb](https://linkedin.com/in/ezzeldeenqutb)
- **Instagram**: [@itsmepanto](https://instagram.com/itsmepanto)

---

<div align="center">
  <p>Made with ❤️ by Ezzeldeen Qutb</p>
  <p>🤖 AI/ML Engineer • Data Scientist • Creative Developer</p>
</div>
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/55d67f00-7265-46a3-aeba-78d7cf6d9636) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
