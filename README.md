# Diego Carmona - Portfolio

A modern, high-performance portfolio website built with cutting-edge technologies. Features premium animations, dark mode support, multi-language internationalization, and optimized performance metrics.

**Website/Deploy**: [carmona.vercel.app](https://carmona.vercel.app) | **Repository**: [GitHub](https://github.com/diegocarmn/portfolio)

## 🎯 Overview

This is a **production-ready portfolio** showcasing full-stack development capabilities through:

- **Premium UX/DX** with smooth animations powered by Framer Motion
- **Performance-first** architecture with Next.js 16 and modern React 19
- **Type-safe** codebase with TypeScript
- **Accessibility-compliant** semantic HTML and ARIA labels
- **Dark mode** with automatic theme detection
- **Multi-language support** for English and Portuguese (pt-BR)
- **3D background effects** using Vanta + Three.js

## 📊 Tech Stack

### Frontend Framework

- **Next.js 16.1.6** - React framework with server components and app router
- **React 19.2.3** - Latest React with concurrent features
- **TypeScript 5** - Full type safety across the codebase

### Styling & Animation

- **Tailwind CSS 4** - Utility-first CSS with PostCSS integration
- **Framer Motion 12.29.2** - Production-grade animations with GPU acceleration
- **Vanta 0.5.24** - Animated 3D backgrounds
- **Three.js 0.182.0** - WebGL rendering for 3D effects

### Developer Tools

- **ESLint 9** - Code quality with Next.js config
- **TypeScript strict mode** - Enforced type checking

### Icons & Assets

- **react-icons 5.5.0** - SVG icon library integration
- **Next.js Image** - Automatic image optimization

## 🚀 Features

### Performance

- ✅ **Optimized images** via Next.js Image component
- ✅ **Font loading** with `next/font`
- ✅ **Code splitting** with dynamic imports
- ✅ **CSS-in-JS** via Tailwind (zero runtime overhead)

### User Experience

- ✅ **Smooth scroll behavior** with Intersection Observer
- ✅ **Staggered animations** using variants pattern
- ✅ **Hardware-accelerated transforms** via Framer Motion
- ✅ **Responsive design** mobile-first approach

### Accessibility

- ✅ **Semantic HTML** structure
- ✅ **ARIA labels** on interactive elements
- ✅ **Keyboard navigation** support
- ✅ **Dark mode** with proper contrast ratios
- ✅ **Screen reader** compatible

### Internationalization

- ✅ **Dual language** support (EN / PT-BR)
- ✅ **Centralized translations** in single source
- ✅ **Dynamic theme switching** with real-time updates
- ✅ **Regional formatting** support

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── animations.ts          # Framer Motion variants 
│   │   ├── BentoGrid.tsx          # Bento layout with cards
│   │   ├── Button.tsx             # Reusable button component
│   │   ├── ContactCard.tsx        # Contact method cards
│   │   ├── CopyEmailButton.tsx    # Email copy with toast feedback
│   │   ├── DarkModeToggle.jsx     # Theme switcher
│   │   ├── LanguageToggle.tsx     # Language state toggle
│   │   ├── LocationCard.tsx       # Interactive map zoom with crossfade
│   │   ├── LogoButton.tsx         # Social links reusable button
│   │   ├── Navbar.tsx             # Navigation with active section tracking
│   │   ├── ProjectsCard.tsx       # Project showcase card
│   │   ├── ProjectsCardTag.tsx    # Skill tags component
│   │   ├── StatusBadge.tsx        # Availability status
│   │   ├── VantaBackground.jsx    # 3D background effect wrapper
│   │   └── content/
│   │       └── translations.ts    # language/text data (EN + PT-BR)
│   ├── globals.css                # Tailwind + custom properties
│   ├── layout.tsx                 # Root layout with font optimization
│   └── page.tsx                   # Main portfolio page
├── public/
│   ├── map/                       # Map assets (zoom levels)
│   └── *.png                      # Project mockups & logos
└── tsconfig.json                  # TypeScript strict mode enabled
```

## 🛠️ Setup & Development

### Prerequisites

- **Node.js** 18.17+ (LTS recommended)
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Clone repository
git clone https://github.com/diegocarmn/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
pnpm install
```

### Development Server

```bash
npm run dev
# Server runs at http://localhost:3000
```

The page auto-updates as you edit files (hot module replacement).

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🎨 Key Implementation Details

### Animation Strategy

Using **Framer Motion variants** for reusable animation states:

```typescript
const blurUp = {
  initial: { opacity: 0, y: 60, filter: "blur(20px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};
```

**Benefits:**

- Declarative animation definitions
- Easy to maintain and modify
- Type-safe with TypeScript
- GPU-accelerated transforms



### Optimization Techniques

1. **Image optimization** via Next.js Image
2. **CSS-in-JS** with zero runtime (Tailwind)
3. **Code splitting** with dynamic imports
4. **Font subsetting** with `next/font`

## 🌐 Deployment

### Vercel 

Automatic deployments from GitHub:

```bash
# Push to main branch triggers deployment
git push origin main
```

**Benefits:**

- Zero-config deployment
- Automatic SSL certificates
- Edge caching
- Analytics included


## 🔍 Code Quality

### Type Safety

- ✅ TypeScript strict mode enabled
- ✅ No implicit `any` types
- ✅ Exhaustive type checking

### Code Style

- ✅ ESLint with Next.js recommended rules
- ✅ Consistent formatting (Tailwind classes)
- ✅ Component co-location with styles


## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Framer Motion API](https://motion.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, copy, modify, merge, publish, and distribute this code, including for commercial purposes, provided that the original copyright and license notice are included.

> ⚠️ **Note:** This repository represents my personal portfolio.  
> While the code is open-source under the MIT License, the personal information, branding, and content (such as name, images, and descriptions) should not be used to impersonate or misrepresent the author.

See the [`LICENSE`](./LICENSE) file for full details.

## 👤 Author

**Diego Carmona** - Full Stack Developer

- 🔗 [LinkedIn](https://linkedin.com/in/diegocarmn)
- 🔗 [GitHub](https://github.com/diegocarmn)
- 📧 [Email](mailto:diegoncarmona@gmail.com)


📩 Interested in working together?  
Feel free to reach out via LinkedIn or email.
