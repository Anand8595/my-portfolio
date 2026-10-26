# 🚀 Anand Ahire | Full-Stack Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-5-black?style=for-the-badge&logo=express" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  A modern, responsive full-stack developer portfolio showcasing my projects, technical skills, internship experience, and software development journey.
</p>

<p align="center">
  <a href="https://anandahire.vercel.app"><strong>🌐 Visit Live Portfolio</strong></a> •
  <a href="https://github.com/Anand8595"><strong>💻 GitHub</strong></a> •
  <a href="https://www.linkedin.com/in/anand-ahire-142519307/"><strong>🔗 LinkedIn</strong></a>
</p>

---

## 🌐 Live Deployment

| Service | Link |
|---|---|
| Portfolio Website | [anandahire.vercel.app](https://anandahire.vercel.app) |
| Backend API | [my-portfolio-ar5r.onrender.com](https://my-portfolio-ar5r.onrender.com) |
| API Health Check | [Check API Status](https://my-portfolio-ar5r.onrender.com/api/health) |
| GitHub Profile | [Anand8595](https://github.com/Anand8595) |
| LinkedIn Profile | [Anand Ahire](https://www.linkedin.com/in/anand-ahire-142519307/) |

## ✨ Features

- **Modern UI/UX:** Dark developer-focused interface with glassmorphism, gradients, and smooth micro-interactions.
- **Responsive Design:** Optimized layouts for desktop, tablet, and mobile devices.
- **Dynamic Project Showcase:** Browse projects with category filters, technology-based search, and project details.
- **Interactive Project Details:** Explore project functionality, architecture, and technology stacks.
- **Live Backend Status:** Health-check integration to display backend availability.
- **Contact Form:** Submit contact inquiries through the backend REST API.
- **MongoDB Integration:** Persist project and contact data using MongoDB Atlas.
- **Resilient Data Handling:** In-memory fallback support when the database is temporarily unavailable.
- **Email Notifications:** Integrate Resend's HTTP API for contact-form email notifications.
- **Resume Access:** Provide recruiters with access to my professional resume.
- **SEO Foundations:** Page metadata and structured application layout.

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | Next.js 16, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v3, custom CSS |
| Icons | Lucide Icons, custom SVGs |
| Backend | Node.js, Express.js 5 |
| Database | MongoDB Atlas, Mongoose |
| Email Integration | Resend HTTP API |
| API Architecture | RESTful APIs |
| Deployment | Vercel, Render |
| Version Control | Git, GitHub |

## 🏗️ Architecture

```text
                    ┌──────────────────────┐
                    │       Visitor        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │  Next.js / React UI  │
                    │   TypeScript + CSS   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Express REST API   │
                    │ Controllers & Routes │
                    └──────────┬───────────┘
                               │
                    ┌──────────┴───────────┐
                    ▼                      ▼
           ┌────────────────┐    ┌────────────────┐
           │ MongoDB Atlas  │    │   Resend API   │
           │ Project/Contact│    │ Email Delivery │
           └────────────────┘    └────────────────┘
```

## 🔌 Backend API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Check backend and database status |
| GET | `/api/projects` | Retrieve projects with supported filters |
| GET | `/api/projects/:id` | Retrieve a project's detailed information |
| POST | `/api/messages` | Submit a contact inquiry |
| GET | `/api/messages` | Retrieve contact inquiries — should be protected by authentication |

**Security note:** The contact inquiry retrieval endpoint should only be available to authorized administrators. Validate incoming data on the server and never expose database credentials or API secrets in frontend code.

## 📂 Project Structure

```text
my-portfolio/
├── client/
│   ├── public/
│   │   ├── anand-ahire.jpg
│   │   └── Anand_Ahire_Resume.pdf
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ProjectModal.tsx
│   │   │   ├── ArchitectureSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── EducationCertificationsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Icons.tsx
│   │   ├── lib/
│   │   │   └── api.ts
│   │   └── types/
│   │       └── index.ts
│   └── package.json
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.ts
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── data/
│   │   ├── seed.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB local installation or MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd my-portfolio
```

Replace `<YOUR_REPOSITORY_URL>` with your actual GitHub repository URL.

### 2. Install Dependencies

```bash
npm install

cd client
npm install

cd ../server
npm install

cd ..
```

### 3. Configure Environment Variables

Create `server/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
```

Use the exact environment variable names expected by your implementation. Keep `.env` files out of Git and commit only a sanitized `.env.example`.

### 4. Start the Application

Open two terminals from the repository root.

**Terminal 1 — Backend**

```bash
npm run dev:server
```

**Terminal 2 — Frontend**

```bash
npm run dev:client
```

The local application should be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Health Check: http://localhost:5000/api/health

These commands assume your root `package.json` defines the corresponding scripts.

## 💼 Featured Projects

### 1. ExamEdge AI

An AI-powered study notes generation platform designed to help students prepare and organize study materials.

**Technologies:** MERN Stack, React, Node.js, Express.js, MongoDB, Gemini API.

**Highlights:**
- AI-powered study notes generation.
- User authentication and personalized history.
- Responsive user interface.
- Study content management and export features.

### 2. Interview-Agent-AI

An AI-assisted interview preparation platform that helps candidates practice interviews and review their performance.

**Technologies:** React, Node.js, Express.js, MongoDB, OpenRouter API, Firebase Authentication.

**Highlights:**
- AI-assisted interview sessions.
- Technical and HR interview practice.
- Interview history and performance reports.
- Credit and payment integration.

### 3. Social Media Addiction Tracker

An Android application designed to encourage healthier digital habits through screen-time tracking and focus features.

**Technologies:** Java, XML, Android Studio, SQLite/Firebase (as implemented).

**Highlights:**
- Screen-time monitoring.
- Focus and digital wellness features.
- Mood tracking and habit gamification.

### 4. Full-Stack Developer Portfolio

A full-stack portfolio application that presents my technical skills, projects, experience, and contact information.

**Technologies:** Next.js, React, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB.

**Highlights:**
- Modular frontend architecture.
- REST API integration.
- Dynamic project discovery.
- Cloud deployment on Vercel and Render.

## 🎓 Education

**Bachelor of Engineering — Computer Engineering**

Savitribai Phule Pune University  
Late G. N. Sapkal College of Engineering, Nashik

## 👨‍💻 About Me

I am a Computer Engineering graduate interested in building reliable, responsive, and user-friendly web applications. My hands-on development experience includes working with React, JavaScript, Node.js, Express.js, and MongoDB, along with developing full-stack projects and integrating APIs.

I am continuously improving my problem-solving skills, Java fundamentals, and data structures and algorithms while preparing for software development opportunities.

## 📫 Connect With Me

- **GitHub:** https://github.com/Anand8595
- **LinkedIn:** https://www.linkedin.com/in/anand-ahire-142519307/
- **Portfolio:** https://anandahire.vercel.app

---

<p align="center">
  <strong>Code. Create. Learn. Grow.</strong>
  <br />
  Designed and developed by Anand Ahire © 2026
</p>

