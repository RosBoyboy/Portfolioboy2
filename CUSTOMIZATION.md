# Customization Guide

This guide explains how to customize your portfolio to showcase your unique personality and projects.

## 1. Update Personal Information

Edit `data/content.ts` to add your information:

### Hero Section
```typescript
hero: {
  name: "Your Name",
  title: "Your Job Title",
  statement: "Your professional statement...",
  ctaText: "View My Work",
  ctaLink: "#projects",
}
```

**Tips:**
- Keep the statement to 1-2 sentences
- Make it memorable and authentic
- Focus on your unique value proposition

### Contact Information
```typescript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "rxboyboy@gmail.com",
}
```

## 2. Showcase Your Projects

Replace the three placeholder projects with your own.

### The Big Three Structure

**Project 1: What I Already Know**
- A completed, polished project
- Shows your solid foundation
- Use technologies you're confident in
- Example: E-commerce platform, Blog, Dashboard

**Project 2: What I Recently Learned**
- A project using new technologies
- Demonstrates growth and adaptability
- Example: AI integration, Real-time features, New framework

**Project 3: What I Aspire to Build**
- An ambitious project in progress or planned
- Shows ambition and forward thinking
- Can be incomplete or conceptual
- Example: Complex system, scaling challenge, emerging tech

### Project Template
```typescript
{
  id: 1,
  title: "Project Name",
  subtitle: "What I Already Know",
  description: "Detailed description of the project...",
  technologies: ["React", "Node.js", "MongoDB"],
  image: "/projects/project-name.jpg",
  githubLink: "https://github.com/yourusername/project",
  liveLink: "https://project-demo.vercel.app",
  highlights: [
    "Key feature 1",
    "Key feature 2",
    "Key feature 3",
  ],
}
```

**Guidelines:**
- Keep description to 2-3 sentences
- List 3-5 key technologies
- Highlight 2-4 key features
- Always include GitHub link
- Include live demo if available

## 3. Update Learning Technologies

Show what you're actively studying:

```typescript
learning: {
  technologies: [
    {
      category: "Backend & Infrastructure",
      items: ["Docker", "Kubernetes", "GraphQL"],
    },
    // ... more categories
  ],
  mindset: "Your growth mindset statement...",
}
```

**Categories to Consider:**
- Backend & Infrastructure
- Frontend Frameworks
- AI & Machine Learning
- DevOps & Cloud
- Database Technologies
- Development Tools

## 4. Customize Colors & Styling

### Theme Colors
Edit `tailwind.config.ts` to change the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#3f46e6",    // Change to your primary color
      secondary: "#1e293b",  // Change to your secondary color
      accent: "#0ea5e9",     // Change to your accent color
    },
  },
}
```

**Color Hex Codes:**
- Indigo: #3f46e6
- Cyan: #0ea5e9
- Blue: #0284c7
- Purple: #9333ea
- Pink: #ec4899

### Global Styles
Edit `app/globals.css` to customize fonts, animations, and more.

## 5. Add Project Images

1. **Create a public folder** (if not exists)
   ```
   public/
   └── projects/
       ├── ecommerce.jpg
       ├── ai-assistant.jpg
       └── collaboration.jpg
   ```

2. **Update project image paths**
   ```typescript
   image: "/projects/your-project.jpg"
   ```

3. **Image Requirements:**
   - Format: JPG, PNG, or WebP
   - Size: 1200x630px (recommended)
   - File size: < 500KB

## 6. Update Navigation Links

Edit `data/content.ts` navigation:
```typescript
navigation: [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
  // Add more sections as needed
]
```

## 7. Customize Footer

Edit footer information in `data/content.ts`:
```typescript
footer: {
  tagline: "Your custom tagline ✨",
  year: new Date().getFullYear(),
}
```

## 8. Add New Sections

### Create a New Component
Create `components/YourSection.tsx`:

```typescript
"use client";

import { portfolioContent } from "@/data/content";

export default function YourSection() {
  return (
    <section id="your-section" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Your content here */}
      </div>
    </section>
  );
}
```

### Add to Home Page
Update `app/page.tsx`:
```typescript
import YourSection from "@/components/YourSection";

export default function Home() {
  return (
    <>
      {/* ... existing sections ... */}
      <YourSection />
      {/* ... */}
    </>
  );
}
```

## 9. SEO Optimization

Update metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name | Developer Portfolio",
  description: "Your custom description here",
  keywords: ["your", "keywords", "here"],
};
```

## 10. Advanced Customizations

### Add Animations
Use Tailwind's animation utilities or add custom animations in `globals.css`:

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Add Dark Mode Toggle (Optional)
Next.js supports dark mode out of the box with Tailwind CSS.

### Add Blog Section
Create `app/blog/` directory for blog posts with MDX.

### Add Contact Form
Integrate with services like:
- EmailJS
- Formspree
- SendGrid

## Quick Customization Checklist

- [ ] Update `data/content.ts` with your info
- [ ] Replace the three projects with yours
- [ ] Update learning technologies
- [ ] Change colors in `tailwind.config.ts`
- [ ] Add project images to `/public/projects/`
- [ ] Update SEO metadata in `layout.tsx`
- [ ] Update social links
- [ ] Test on mobile devices
- [ ] Deploy to Vercel

## Need Help?

- Check `README.md` for general info
- See `DEPLOYMENT.md` for deployment steps
- Visit [Next.js Docs](https://nextjs.org/docs)
- Visit [Tailwind Docs](https://tailwindcss.com/docs)

---

**Remember:** Your portfolio is a reflection of you. Make it authentic, keep it updated, and let your personality shine through!
