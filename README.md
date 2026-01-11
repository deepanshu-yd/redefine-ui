<p align="center">
  <img src="public/img/logo.png" alt="Zentry Logo" width="80" />
</p>

# Redefine Awards - Zentry UI 🎮

A visually stunning, award-worthy frontend website built with React, featuring smooth GSAP animations, interactive video transitions, and modern UI design. This project showcases a gaming-themed landing page with immersive animations and engaging user interactions.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-38B2AC?style=flat&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88CE02?style=flat&logo=greensock)

## ✨ Features

- **Hero Section** - Interactive video carousel with smooth transitions and scroll-triggered animations
- **Animated Titles** - 3D text animations with scroll-based reveal effects
- **Bento Grid Layout** - Modern card-based feature showcase with tilt effects on hover
- **Floating Image Effects** - Interactive 3D perspective transformations on mouse movement
- **Audio Integration** - Background music with animated audio indicator
- **Responsive Navigation** - Auto-hiding navbar with scroll detection
- **Custom Loader** - Elegant loading animation while videos preload

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | GSAP (GreenSock) |
| **Icons** | React Icons |
| **Utilities** | react-use |

## 📁 Project Structure

```
src/
├── App.jsx              # Main application component
├── main.jsx             # React entry point
├── index.css            # Global styles & Tailwind config
└── components/
    ├── AnimatedTitle.jsx  # Scroll-triggered text animations
    ├── Button.jsx         # Reusable button component
    ├── Hero.jsx           # Hero section with video carousel
    ├── About.jsx          # About section with clip-path animations
    ├── Features.jsx       # Bento grid feature cards
    ├── Story.jsx          # Story section with floating image
    ├── Contact.jsx        # Contact section with image overlays
    ├── Navbar.jsx         # Responsive navigation bar
    └── Footer.jsx         # Footer with social links

public/
├── audio/              # Background music files
├── fonts/              # Custom web fonts
│   ├── circularweb-book.woff2
│   ├── general.woff2
│   ├── robert-medium.woff2
│   ├── robert-regular.woff2
│   └── zentry-regular.woff2
└── img/                # Static images
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd redefine-awards
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Components Overview

### Hero
The main landing section featuring:
- Video carousel with 4 different gaming-themed videos
- Click-to-transition mini video preview
- Scroll-triggered clip-path morphing
- Custom loading state with animated dots

### AnimatedTitle
Reusable component for creating scroll-triggered text animations:
- 3D rotation effects on individual words
- Staggered reveal animations
- Support for bold styling within titles

### Features (Bento Grid)
Interactive card grid featuring:
- `BentoTilt` - 3D tilt effect on hover
- `BentoCard` - Video background cards with gradient hover effects
- "Coming Soon" badges with radial gradient cursor tracking

### Story
Immersive storytelling section with:
- Floating image with 3D mouse-tracking rotation
- SVG filter effects for rounded corners
- Mix-blend-mode title overlay

### Navbar
Smart navigation with:
- Auto-hide on scroll down, show on scroll up
- Floating glass-morphism style when scrolled
- Audio toggle with animated bars indicator

## 🎭 Custom Fonts

The project uses custom fonts for a unique visual identity:
- **Circular Web** - Body text
- **General Sans** - Navigation & labels
- **Robert** - Medium and regular weights
- **Zentry** - Display headings with special character features

## 🎬 Animation Highlights

- **ScrollTrigger** - Animations tied to scroll position
- **Clip-path morphing** - Shape transitions on scroll
- **3D transforms** - Perspective-based hover effects
- **Staggered reveals** - Sequential element animations

## 📱 Responsive Design (Coming soon)

The website is planned to be responsive with breakpoints for:
- Mobile (default)
- Tablet (`sm:` 640px)
- Desktop (`md:` 768px)
- Large screens (`lg:` 1024px)

## 🔧 Customization

### Colors
Custom color palette defined in `index.css`:
```css
--color-blue-50: #DFDFF0
--color-blue-75: #DFDFF2
--color-violet-300: #5724FF
--color-yellow-300: #EDFF66
```

### Videos
Hero and feature videos are hosted on Cloudinary. Update URLs in:
- [Hero.jsx](src/components/Hero.jsx) - `videoUrls` object
- [Features.jsx](src/components/Features.jsx) - `featureVideoUrls` object


## 📄 Warning

This project is for practice purposes only.

---

<p align="center">
  Built with ❤️ using React + Vite + GSAP
</p>
