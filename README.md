# Rishav Singh - Professional Portfolio

A high-performance, modern, and fully responsive portfolio website built with a backend-focused mindset using the **MERN Stack** (specifically the frontend portion here). This project emphasizes clean architecture, maintainability, and smooth user experience.

## 🌟 Overview

This portfolio showcases the skills, education, projects, and certifications of Rishav Singh. It features a sleek dark/light theme system, fluid animations using `motion/react`, and a modular component structure that makes it extremely easy to maintain and scale.

## 🚀 Key Features

- **🌓 Dynamic Theme Engine**: Seamlessly switch between Dark and Light modes with a custom-engineered toggle that remembers user preference.
- **📱 True Responsive Design**: Optimized for everything from ultra-wide desktops to the smallest mobile devices.
- **✨ Fluid Motion**: Powered by `motion/react` for elegant section entrances, hover effects, and smooth layout transitions.
- **📑 Modular Architecture**: The project is split into reusable UI components (`/ui`), layout wrappers (`/layout`), and feature-specific sections (`/sections`).
- **🔍 Global Search Optimized**: Every file contains standardized comment blocks with `SEARCH_TAGS`, allowing developers to navigate the codebase instantly using global search.
- **📜 Smooth Scroll Navigation**: Custom implementation of an ease-in-out cubic scroll for a premium "single-page application" feel.
- **🛡️ Copy Protection**: Dedicated shield layers and right-click prevention on sensitive assets like certifications.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS (Utility-first approach)
- **Animations**: Motion (formerly Framer Motion)
- **Icons**: Lucide React
- **Typography**: Figtree (Sans) and Satoshi (Display)

---

## 📂 Project Structure

The project follows a "Sections & Components" pattern for maximum clarity:

```text
src/
├── components/
│   ├── layout/         # Persistent wrappers (Navbar, Footer)
│   ├── sections/       # Main page sections (Hero, About, Projects, etc.)
│   └── ui/             # Reusable atomic UI elements (Cards, Modals, Buttons)
├── App.tsx             # Root component & State Orchestrator
├── main.tsx            # Application Entry Point
├── index.css           # Global Styles & CSS Variable Definitions
└── constants.ts        # (Optional) Hardcoded text and configurations
```

---

## 🔧 Maintainability & Global Search

This project is built for professional handoff. We use a **Standardized Commenting System**:

- **@component**: Identifies the component name.
- **@description**: Explains the purpose and logic.
- **SEARCH_TAGS**: Keywords for global search (e.g., `// SEARCH_TAGS: Hero, Avatar, CTA`).
- **MAINTAINABILITY**: Explicit tips on how to update or modify specific logic.

**Try it in VS Code:** `Ctrl + Shift + F` and search for `@component` or a specific tag like `ThemeToggle`.

---

## 💻 Local Development

### 1. Prerequisites
- **Node.js** (v18+)
- **npm** or **yarn**

### 2. Setup
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## 💡 Customization Guide

- **Theme & Colors**: All branding colors are defined as CSS variables at the top of `src/index.css`. Modify `--color-accent` to change the primary brand color globally.
- **Content**: Each section has its own file in `src/components/sections/`. Update the text, arrays, or icons there.
- **Certifications**: Manage the list of credentials in `src/components/sections/Certifications.tsx`.

---

## 📝 License

This project is open for personal use. Attribution is appreciated!

---
*Built with ❤️ by Rishav Singh*