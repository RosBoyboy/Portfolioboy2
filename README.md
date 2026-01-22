# Developer Portfolio Website

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This portfolio showcases your projects, skills, and learning journey in a professional and visually appealing way.

## 🚀 Features

- **Hero Section**: Eye-catching introduction with your professional statement
- **Big Three Projects**: Showcase three projects demonstrating past knowledge, recent learning, and future aspirations
- **Currently Learning Section**: Highlight technologies and concepts you're actively studying
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast load times and optimized images
- **Accessibility**: Semantic HTML and WCAG compliance
- **Vercel Ready**: Easy deployment with zero configuration

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx                 # Root layout with metadata
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   └── favicon.ico
├── components/
│   ├── Header.tsx                 # Navigation header
│   ├── HeroSection.tsx            # Hero/intro section
│   ├── ProjectCard.tsx            # Reusable project card component
│   ├── ProjectsSection.tsx        # Big Three projects showcase
│   ├── LearningSection.tsx        # Currently learning section
│   └── Footer.tsx                 # Footer with links
├── data/
│   └── content.ts                 # Centralized content management
├── public/                        # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Font**: Geist (Google Fonts)

## 📋 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git (optional, for version control)

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter

## 🎨 Customization

All content is centralized in `data/content.ts`. Customize:

1. **Hero Statement**: Update your professional introduction
2. **Project Details**: Modify the three featured projects (past, present, future)
3. **Learning Technologies**: Add or remove technologies you're studying
4. **Personal Information**: Add your links, social profiles, etc.

### Example Content Modification

Edit `data/content.ts`:
```typescript
export const portfolioContent = {
  hero: {
    title: "Your Name",
    statement: "Full-Stack Developer building the future, one project at a time.",
  },
  // ... more content
};
```

## 🌐 Deployment to Vercel

1. **Push to GitHub** (if not already):
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Custom Domain** (optional):
   - Go to project settings in Vercel
   - Add your custom domain
   - Configure DNS records as instructed

## 📱 Responsive Design

The portfolio is built mobile-first and is fully responsive:
- **Mobile**: Optimized for screens < 640px
- **Tablet**: Optimized for screens 640px - 1024px
- **Desktop**: Optimized for screens > 1024px

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Color contrast compliance
- Keyboard navigation support
- Screen reader friendly

## 🔍 SEO Optimization

- Metadata configured in `layout.tsx`
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast page load times
- Mobile-friendly design

## 📝 Content Sections

### 1. Hero Section
- Professional introduction
- One-sentence statement highlighting your role and passion
- Call-to-action button (e.g., "View My Work", "Get in Touch")

### 2. Big Three Projects
- **Project 1 (What I Know)**: Showcase a completed, polished project using established tech
- **Project 2 (What I Learned)**: Highlight a recent project where you applied new skills
- **Project 3 (What I Aspire)**: Show an ambitious project idea or your learning goals

### 3. Currently Learning
- Technologies you're studying
- Concepts you're mastering
- Tools you're exploring
- Demonstrates growth mindset to recruiters

## 🚀 Performance Tips

1. **Images**: Use Next.js `Image` component for optimization
2. **Code Splitting**: Components are automatically code-split
3. **Lazy Loading**: Components load on demand
4. **Font Optimization**: Fonts are self-hosted and optimized

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment](https://vercel.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Best Practices for Recruiters

Your portfolio should communicate:
1. **Technical Skills**: Show what you can build
2. **Learning Mindset**: Highlight continuous growth
3. **Professional Presentation**: Clean, modern design
4. **Real Projects**: Demonstrate practical application
5. **Clear Communication**: Well-organized, easy to navigate

---

**Ready to deploy?** This portfolio is optimized for instant deployment to Vercel with zero configuration needed!
