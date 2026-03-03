# Fenrir SaaS Security Platform

This repository contains the frontend implementation of the Fenrir B2B SaaS Security Platform. It accurately translates provided design references into a responsive, production-ready React application.

## 🚀 Features

- **Pixel-Perfect UI**: Recreated Login, Dashboard, and Scan Detail screens based on high-fidelity designs.
- **Dark/Light Mode**: Full theme support with an instant toggle (accessible via the `aps` logo or the Sidebar).
- **Responsive Layout**: Adapts seamlessly to both desktop and mobile devices.
- **Component-Driven**: Built with highly reusable UI components (Buttons, Badges, Inputs, Status Chips).
- **Interactive Data**: Powered by mock data to simulate a realistic application state without a backend.
- **Dynamic Navigation**: Client-side routing to transition effortlessly between screens.

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite v5 (Optimized for fast HMR and optimized builds)
- **Styling**: Tailwind CSS v3 (Utility-first CSS framework for rapid UI development)
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Utilities**: `clsx` and `tailwind-merge` for robust class name resolution

## 🔧 Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/fenrir-spl.git
   cd fenrir-spl
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

### Production Build

To create a production-optimized build, run:
```bash
npm run build
```
The output will be placed in the `dist` folder. You can preview the build using:
```bash
npm run preview
```

## 🎥 Video Walkthrough

[Provide Loom Video Link Here]

## 🌐 Live Deployment

https://fenrir-spl.vercel.app/

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # AppLayout, Sidebar
│   └── ui/           # Reusable components (Button, Input, Badge)
├── data/             # mockData.js
├── hooks/            # useTheme.jsx (Theme provider)
├── pages/            # Login, Dashboard, ScanDetail
├── utils/            # cn.js (Class name utility)
├── App.jsx           # Main routing configuration
├── main.jsx          # Entry point
└── index.css         # Global styles & Tailwind configuration
```
