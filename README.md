# Chandan Kumar Sharma — Personal Portfolio & Engineering Showcase

A high-performance personal developer portfolio built with **React (Vite)** and **Tailwind CSS**. Designed specifically to showcase full-stack proficiency (MERN), live production e-commerce ownership (Magento 2 / Hyvä Themes), and modern cloud extensibility (Adobe App Builder).

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
Make sure you have Node.js (v18+) and npm installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`. Any changes you make to the code will update instantly with Hot Module Replacement (HMR).

### 4. Build for Production
```bash
npm run build
```
This generates the optimized static build files inside the `dist/` directory.

---

## 🌐 Deploying to Vercel (Step-by-Step)

Deploying this portfolio on Vercel is completely free and takes less than 2 minutes.

### Method 1: Via GitHub (Recommended)
1. Initialize git and commit your code:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on your GitHub (`https://github.com/Chandu7488/portfolio`) and push:
   ```bash
   git remote add origin https://github.com/Chandu7488/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and log in with GitHub.
4. Click **"Add New..."** -> **"Project"**.
5. Select your `portfolio` repository and click **"Import"**.
6. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
7. Click **"Deploy"**. Within 30 seconds, your portfolio will be live at `https://your-portfolio.vercel.app`!

### Method 2: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts and choose default settings.

---

## 📂 Project Architecture

```
portfolio/
├── public/                     # Static public assets
├── src/
│   ├── assets/                 # SVGs and images
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Sticky glassmorphism header with mobile drawer
│   │   ├── Hero.jsx            # Dynamic headline, stats ribbon, CTA buttons
│   │   ├── LighthouseHighlight.jsx # 99/100 Core Web Vitals case study
│   │   ├── About.jsx           # Background narrative, 3 pillars of expertise
│   │   ├── Experience.jsx      # Magebytes Pvt Ltd & MERN training timeline
│   │   ├── Projects.jsx        # Filterable project showcase (All, Production, Full-Stack, Cloud)
│   │   ├── Skills.jsx          # Categorized technical toolkit matrix
│   │   ├── EducationTraining.jsx # MCA (8.075 CGPA), BCA, and MERN certifications
│   │   ├── Contact.jsx         # Contact form, direct mailto, copy email button
│   │   ├── Footer.jsx          # Copyright, social links, back-to-top button
│   │   └── Icons.jsx           # Crisp SVG brand icons (GitHub, LinkedIn)
│   ├── data/
│   │   └── portfolioData.js    # Single source of truth for all content
│   ├── App.jsx                 # Main layout assembling all sections
│   ├── index.css               # Tailwind CSS v4 styling & dark theme
│   └── main.jsx                # React root entry point
├── index.html                  # HTML template with SEO tags & Google Fonts
├── vercel.json                 # Vercel SPA routing configuration
├── vite.config.js              # Vite configuration with Tailwind plugin
└── package.json                # Project dependencies and scripts
```

---

## 🧠 React & MERN Refresher Guide (Interview & Code Study)

Since you haven't revised React/MERN in ~1 year, here is a breakdown of the core React concepts used in this project:

### 1. `useState` (Managing Component State)
State allows a React component to remember values between renders:
- **`Navbar.jsx`**:
  ```jsx
  const [isOpen, setIsOpen] = useState(false);
  ```
  Controls whether the mobile navigation drawer is visible or hidden.
- **`Projects.jsx`**:
  ```jsx
  const [activeFilter, setActiveFilter] = useState('All');
  ```
  Filters projects between "All", "Production", "Full-Stack", and "Cloud & Systems".
- **`Contact.jsx`**:
  ```jsx
  const [copied, setCopied] = useState(false);
  ```
  Temporarily turns the copy icon into a green checkmark for 2 seconds after copying your email.

### 2. `useEffect` (Side Effects & Browser Events)
Runs side effects (like adding scroll listeners, timers, or fetching data):
- **`Navbar.jsx`**:
  ```jsx
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  ```
  - `[]` empty dependency array means it runs once when the component mounts.
  - The return function cleans up the event listener when unmounting to prevent memory leaks.

### 3. Separation of Concerns (`portfolioData.js`)
All your personal data, job experience, metrics, and project details live in `src/data/portfolioData.js`. 
- Whenever you want to add a new project, new company, or update your phone number, you **only update that single data file** without having to touch UI component code.

### 4. Tailwind CSS Utility Classes
- **Flexbox & Grid:** `flex items-center justify-between`, `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
- **Responsive design:** Prefixes like `sm:`, `md:`, `lg:` define layout changes on tablet and desktop screens.
- **Glassmorphism:** `bg-slate-900/60 backdrop-blur-xl border border-slate-800/80` creates translucent, frosted glass effect cards.
- **Gradients:** `bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text` gives text glowing gradient accents.
