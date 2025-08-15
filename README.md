# 🍽️ Premium Catering Website - Local SEO Optimized

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4) ![React](https://img.shields.io/badge/React-19.1.0-61DAFB)

A **high-performance, SEO-optimized catering website** built with Next.js 15, featuring advanced image optimization, responsive design, and professional animations.

## 🚀 **Live Demo**

- **GitHub Pages**: [https://kenn-omisol.github.io/catering](https://kenn-omisol.github.io/catering)
- **Local Development**: `npm run dev` → http://localhost:3000

---

## ✨ **Key Features**

### 🎯 **Business Focused**
- **Local SEO Optimized** with schema markup for restaurants
- **Contact Forms** with validation (React Hook Form + Zod)
- **Service Showcase** with interactive cards
- **Menu Gallery** with filtering and pricing
- **Customer Testimonials** with carousel
- **Professional About Section** with team profiles

### ⚡ **Performance Optimized**
- **47.4 kB** optimized bundle size
- **Industry-leading image optimization** with lazy loading
- **Advanced preloading** for critical resources
- **Blur placeholders** and loading animations
- **SVG fallbacks** for 100% image reliability
- **Core Web Vitals** optimized (LCP, FID, CLS)

### 🎨 **Design Excellence**
- **Responsive Design** - Mobile-first approach
- **Framer Motion** animations and micro-interactions
- **Tailwind CSS 4** with custom design system
- **Catering-specific** color palette and typography
- **Glass morphism** effects and modern UI patterns

### 🛠️ **Developer Experience**
- **TypeScript** for type safety
- **ESLint** configuration for code quality
- **Git workflow** ready with proper .gitignore
- **Multiple deployment options** (Vercel, Netlify, GitHub Pages)

---

## 🏗️ **Tech Stack**

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.4.6 | React framework with App Router |
| **TypeScript** | 5.0 | Type safety and developer experience |
| **Tailwind CSS** | 4.0 | Utility-first CSS framework |
| **Framer Motion** | 12.23.12 | Animations and micro-interactions |
| **React Hook Form** | 7.62.0 | Form handling and validation |
| **Zod** | 4.0.17 | Schema validation |
| **Lucide React** | 0.539.0 | Modern icon library |
| **Next SEO** | 6.8.0 | SEO optimization |

---

## 🚀 **Quick Start**

### **1. Clone Repository**
\`\`\`bash
git clone https://github.com/kenn-omisol/catering.git
cd catering
\`\`\`

### **2. Install Dependencies**
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

### **3. Run Development Server**
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

### **4. Open in Browser**
Visit [http://localhost:3000](http://localhost:3000) to see your website.

---

## 📁 **Project Structure**

\`\`\`
catering-website/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── globals.css         # Global styles & design system
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx        # Hero section with background
│   │   │   ├── Services.tsx    # Service offerings
│   │   │   ├── MenuGallery.tsx # Menu with filtering
│   │   │   ├── About.tsx       # Company information
│   │   │   ├── Testimonials.tsx# Customer reviews
│   │   │   └── Contact.tsx     # Contact form
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx      # Site footer
│   │   └── ui/                 # UI components
│   │       ├── OptimizedImage.tsx # Advanced image component
│   │       ├── ImagePreloader.tsx # Image preloading system
│   │       └── FloatingCTA.tsx    # Floating call-to-action
│   └── lib/
│       ├── utils.ts            # Utility functions
│       └── imageUtils.ts       # Image optimization utilities
├── public/                     # Static assets
│   ├── placeholder-*.svg       # Custom SVG placeholders
│   └── *.svg                  # Icons and graphics
├── .github/workflows/          # GitHub Actions
│   └── deploy.yml             # Auto-deployment workflow
└── documentation/
    ├── DEPLOYMENT_GUIDE.md    # Deployment instructions
    └── IMAGE_OPTIMIZATION_GUIDE.md # Image optimization details
\`\`\`

---

## 🌐 **Deployment Options**

### **🔥 GitHub Pages (Automatic)**
✅ **Already configured!** Every push to `main` branch automatically deploys via GitHub Actions.

**Manual Setup:**
1. Go to repository **Settings** → **Pages**
2. Set **Source** to "GitHub Actions"
3. Push to `main` branch → Auto-deploy!

### **⚡ Vercel (Recommended)**
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
npm run deploy:vercel
\`\`\`
Or connect your GitHub repo at [vercel.com](https://vercel.com) for auto-deployment.

### **🌊 Netlify**
\`\`\`bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
npm run deploy:netlify
\`\`\`

### **📦 Static Export**
\`\`\`bash
# Build static files
npm run build

# Files ready in ./out/ directory
# Upload to any static hosting (AWS S3, DigitalOcean Spaces, etc.)
\`\`\`

---

## 🎨 **Customization**

### **🎨 Design System**
Edit `src/app/globals.css` to customize:
- **Colors**: Brand colors with 9 shades each
- **Typography**: Font families, sizes, and weights  
- **Spacing**: Consistent spacing scale
- **Animations**: Custom keyframes and transitions

### **📝 Content**
Update content in component files:
- **Hero**: `src/components/sections/Hero.tsx`
- **Services**: `src/components/sections/Services.tsx`
- **Menu**: `src/components/sections/MenuGallery.tsx`
- **About**: `src/components/sections/About.tsx`

### **🖼️ Images**
Replace images in components with your own:
- **External Images**: Update URLs in component files
- **Local Images**: Add to `public/` directory
- **Fallbacks**: Custom SVG placeholders automatically used

---

## 📊 **Performance Features**

### **🖼️ Advanced Image Optimization**
- **Lazy Loading**: Images load when entering viewport
- **Blur Placeholders**: Smooth loading transitions
- **Multiple Formats**: WebP, AVIF, JPEG support
- **Responsive Sizing**: Optimized for all devices
- **Error Handling**: SVG fallbacks for reliability

### **⚡ Performance Metrics**
- **Bundle Size**: 47.4 kB optimized
- **First Load JS**: 187 kB shared
- **Static Generation**: All pages pre-rendered
- **Core Web Vitals**: Optimized for Google rankings

### **🔍 SEO Features**
- **Schema Markup**: LocalBusiness, Restaurant structured data
- **Meta Tags**: Dynamic Open Graph and Twitter cards
- **Semantic HTML**: Proper heading structure
- **Alt Text**: All images include descriptive alt text
- **Mobile Friendly**: Responsive design for all devices

---

## 🛠️ **Development**

### **📝 Available Scripts**
\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static files
\`\`\`

### **🔧 Configuration**
- **Next.js**: `next.config.ts`
- **TypeScript**: `tsconfig.json`
- **Tailwind**: `tailwind.config.ts`
- **ESLint**: `eslint.config.mjs`

---

## 📞 **Support & Contact**

### **🐛 Issues**
Report bugs or request features via [GitHub Issues](https://github.com/kenn-omisol/catering/issues)

### **📧 Questions**
For business inquiries or customization requests, contact the development team.

### **📚 Documentation**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

## 📜 **License**

This project is built for **[Your Business Name]** catering services. 

**For custom websites or licensing inquiries, please contact the development team.**

---

## 🎉 **Features Highlight**

✅ **Local SEO Optimized** - Ranks well in local search  
✅ **Mobile-First Design** - Perfect on all devices  
✅ **Lightning Fast** - Optimized performance  
✅ **Professional Animations** - Smooth micro-interactions  
✅ **Contact Forms** - Lead generation ready  
✅ **Menu Showcase** - Visual menu with filtering  
✅ **Customer Testimonials** - Social proof carousel  
✅ **Auto-Deploy Ready** - Push to deploy  
✅ **100% Image Reliability** - Never broken images  
✅ **TypeScript Safe** - Type-safe development  

---

**🚀 Ready to attract more catering clients with a professional web presence!**

*Built with ❤️ using Next.js, TypeScript, and Tailwind CSS*