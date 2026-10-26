# Anand Ahire - Full-Stack MERN Portfolio

A modern, high-performance portfolio website built with the **MERN Stack (MongoDB, Express.js, React 19, Node.js)**, **TypeScript**, **Next.js 16 (App Router)**, and **Tailwind CSS v3**.

---

## 🚀 Live Demo & Repository

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)
- **GitHub Profile**: [https://github.com/Anand8595](https://github.com/Anand8595)
- **LinkedIn Profile**: [https://www.linkedin.com/in/anand-ahire-142519307/](https://www.linkedin.com/in/anand-ahire-142519307/)

---

## 🛠️ Tech Stack & Architecture

### **Frontend (`client/`)**
- **Next.js 16 (App Router)** & **React 19**
- **TypeScript** for strict end-to-end type safety
- **Tailwind CSS v3** with custom theme tokens, glowing shadows, glassmorphism (`glass-panel`), and micro-animations
- **Lucide Icons & Custom SVGs** for sleek developer aesthetics
- **Dynamic Projects Showcase** with real-time category filtering, tech stack search, and deep-dive architecture modal
- **Real-Time Backend Status Pill** in Navbar indicating Express/MongoDB health

### **Backend (`server/`)**
- **Node.js** & **Express 5** in **TypeScript**
- **MongoDB & Mongoose ODM** with resilient in-memory persistence fallback (operates seamlessly even if a local MongoDB instance is not active)
- **RESTful Endpoints**:
  - `GET /api/projects`: Filter by category, keyword search, or featured status
  - `GET /api/projects/:id`: Get detailed project architecture by ID
  - `POST /api/messages`: Contact inquiry submissions with regex email validation
  - `GET /api/messages`: Retrieve saved inquiries
  - `GET /api/health`: Health status & database connection state

---

## 📁 Directory Structure

```
my-portfolio/
├── client/                     # Next.js 16 Frontend
│   ├── public/
│   │   ├── anand-ahire.jpg     # Anand's professional profile photo
│   │   └── Anand_Ahire_Resume.pdf # Downloadable ATS-optimized resume
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css     # Tailwind v3 directives & glassmorphism utilities
│   │   │   ├── layout.tsx      # SEO metadata & font setup
│   │   │   └── page.tsx        # Portfolio page assembler
│   │   ├── components/
│   │   │   ├── Navbar.tsx      # Glassmorphic header with live API status
│   │   │   ├── Hero.tsx        # Headline, photo, floating badges & impact stats
│   │   │   ├── SkillsSection.tsx # Categorized technical skills matrix
│   │   │   ├── ProjectsSection.tsx # Filterable projects grid with search
│   │   │   ├── ProjectModal.tsx # Architectural deep-dive drawer
│   │   │   ├── ArchitectureSection.tsx # Visual MERN dataflow diagrams
│   │   │   ├── ExperienceSection.tsx # Paarsh, Next Level & Codesoft internships
│   │   │   ├── EducationCertificationsSection.tsx # University education & NASA certs
│   │   │   ├── ContactSection.tsx # Direct contact form wired to backend API
│   │   │   ├── Footer.tsx      # Branding, social links, back-to-top
│   │   │   └── Icons.tsx       # Custom SVG components
│   │   ├── lib/api.ts          # Resilient API client with fallback caching
│   │   └── types/index.ts      # TypeScript definitions
│   ├── tailwind.config.ts      # Custom design tokens & glowing gradients
│   └── package.json
│
├── server/                     # Express & TypeScript Backend
│   ├── src/
│   │   ├── config/db.ts        # Mongoose connection with fallback resilience
│   │   ├── controllers/        # Project & Message controllers
│   │   ├── models/             # Mongoose schemas (Project, Message)
│   │   ├── routes/             # Express routers (/api/projects, /api/messages)
│   │   ├── data/mockProjects.ts# Anand's real resume projects seed data
│   │   ├── seed.ts             # Database seeding script
│   │   └── server.ts           # Express server entrypoint
│   ├── .env                    # Server environment variables
│   ├── tsconfig.json
│   └── package.json
│
└── package.json                # Monorepo root scripts
```

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
# In the client directory
cd client
npm install

# In the server directory
cd ../server
npm install
```

### 2. Run the Development Servers
From the root `my-portfolio/` folder:
```bash
# Run both Frontend & Backend
npm run dev:server    # Starts Express API on http://localhost:5000
npm run dev:client    # Starts Next.js app on http://localhost:3000
```

### 3. (Optional) Seed MongoDB Database
If you have a local MongoDB daemon or MongoDB Atlas URI in `server/.env`:
```bash
cd server
npm run seed
```

---

## 🌟 Featured Projects Included

1. **ExamEdge AI**: AI-powered study notes generator leveraging Google Gemini API, JWT/OAuth authentication, and Stripe payments.
2. **Interview-Agent-AI**: Real-time AI screening coach delivering speech evaluation and candidate assessment reports.
3. **Social Media Addiction Tracker**: Digital wellness Android application with Firebase alerts and habit gamification.
4. **MERN Micro-Services Portfolio**: Production-grade full-stack portfolio with strict TypeScript and custom glassmorphism design.

---

## 📄 License & Credits
Designed and Developed by **Anand Ahire** (2026).
