# Rishav's Portfolio Website

Welcome to the source code for Rishav Singh's professional portfolio. This project is a modern, high-performance web application built with **React**, **Vite**, and **TypeScript**.

## 🚀 Technologies Used

- **React 18**: A JavaScript library for building user interfaces.
- **Vite**: A lightning-fast frontend build tool.
- **TypeScript**: A typed superset of JavaScript that helps catch errors early.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Motion (framer-motion)**: For smooth, production-ready animations.
- **Lucide React**: For beautiful, consistent iconography.

---

## 🛠️ Local Setup Instructions

If you are new to web development, follow these steps to get the project running on your computer.

### 1. Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js**: [Download and install Node.js](https://nodejs.org/) (Recommended version: 18 or higher).
- **A Code Editor**: I recommend [Visual Studio Code](https://code.visualstudio.com/).

### 2. Download the Code

You can either download the ZIP file from the repository and extract it, or use Git to clone it:

```bash
# If using Git
git clone <your-repository-url>
cd <repository-folder-name>
```

### 3. Install Dependencies

Open your terminal (or Command Prompt) in the project folder and run the following command to install all the necessary libraries:

```bash
npm install
```

### 4. Run the Development Server

Once the installation is complete, start the local development server:

```bash
npm run dev
```

Your terminal will show a link (usually `http://localhost:3000` or `http://localhost:5173`). Open this link in your browser to see your website!

---

## 📂 Project Structure

- `src/`: Contains the source code of the application.
  - `App.tsx`: The main component where most of the UI logic resides.
  - `main.tsx`: The entry point that connects React to the HTML page.
  - `index.css`: Global styles and Tailwind CSS configurations.
- `public/`: Static assets like images and icons (e.g., your logo and avatar).
- `package.json`: Contains the list of libraries and scripts used in the project.
- `tsconfig.json`: Configuration for TypeScript.

---

## 💡 How to Customize

- **Change the Name/Text**: Open `src/App.tsx` and search for "Rishav Singh". You can update the text directly there.
- **Update Colors**: Colors are managed via CSS variables in `src/index.css`. Look for the `:root` section to change the accent colors or background colors.
- **Add Projects**: Locate the `projects` array or section in `src/App.tsx` to add your own work.

## 📝 License

This project is for personal portfolio use.
