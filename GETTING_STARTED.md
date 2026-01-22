# Getting Started

## Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org)
- **npm** or **yarn** - Comes with Node.js
- **Code Editor** - VS Code recommended ([code.visualstudio.com](https://code.visualstudio.com))
- **Git** (optional) - For version control

## Installation Steps

### 1. Install Dependencies

Navigate to the portfolio directory and install all dependencies:

```bash
cd portfolio-website
npm install
```

This will install:
- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Styling framework
- **TypeScript** - Type safety

### 2. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` if you need any API keys or custom configuration.

### 3. Start Development Server

```bash
npm run dev
```

Output:
```
> portfolio-website@1.0.0 dev
> next dev

  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 1234ms
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing Your Portfolio

### Step 1: Edit Your Content

Open `data/content.ts` and update:

```typescript
export const portfolioContent = {
  hero: {
    name: "Your Name",           // ← Change this
    title: "Your Job Title",     // ← Change this
    statement: "Your bio...",    // ← Change this
    // ...
  },
  // ... more content
};
```

### Step 2: Add Your Projects

Replace the three placeholder projects with your own:

```typescript
projects: [
  {
    id: 1,
    title: "Your Project Title",
    subtitle: "What I Already Know",
    description: "Project description...",
    technologies: ["Your", "Tech", "Stack"],
    githubLink: "https://github.com/yourusername/project",
    liveLink: "https://your-project.vercel.app",
    highlights: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // ... add your other projects
];
```

### Step 3: Update Your Learning Goals

Update the technologies you're currently learning:

```typescript
learning: {
  technologies: [
    {
      category: "Backend & Infrastructure",
      items: ["Docker", "Kubernetes", "GraphQL"],
    },
    // ... add more categories
  ],
  mindset: "Your growth mindset statement...",
}
```

### Step 4: Add Social Links

Update your contact information:

```typescript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "your.email@example.com",
}
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server on [http://localhost:3000](http://localhost:3000).
- Hot reload on file changes
- Error messages in browser

### Build
```bash
npm run build
```
Creates an optimized production build:
- Compiles TypeScript
- Minifies code
- Optimizes assets

### Production Start
```bash
npm start
```
Starts the production server (requires `npm run build` first).

### Linting
```bash
npm run lint
```
Checks code quality and consistency.

## Project Structure Explained

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout (metadata, fonts)
│   ├── page.tsx           # Home page (assembles components)
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Browser tab icon
│
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Hero/intro section
│   ├── ProjectCard.tsx    # Project card component
│   ├── ProjectsSection.tsx# Projects showcase
│   ├── LearningSection.tsx# Learning technologies
│   └── Footer.tsx         # Footer section
│
├── data/
│   └── content.ts         # All content (centralized)
│
├── public/                # Static assets
│   └── projects/         # Project images (create this)
│
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.ts         # Next.js configuration
├── postcss.config.mjs     # PostCSS configuration
└── README.md              # Main documentation
```

## Understanding the Architecture

### Page Flow
1. **app/page.tsx** - Main page component
2. **Header** - Navigation (sticky)
3. **HeroSection** - Introduction
4. **ProjectsSection** - Featured projects
5. **LearningSection** - Currently learning
6. **Footer** - Contact & links

### Data Management
All content is centralized in **data/content.ts**:
- Easy to maintain
- Single source of truth
- No need to edit components

### Component Design
- **Header**: Navigation & branding
- **HeroSection**: Introduction & CTAs
- **ProjectCard**: Individual project display (reusable)
- **ProjectsSection**: Grid of project cards
- **LearningSection**: Interactive learning category tabs
- **Footer**: Copyright & links

## Common Customizations

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: "#your-color",
  secondary: "#your-color",
  accent: "#your-color",
}
```

### Add Images
1. Create `public/projects/` folder
2. Add images (JPG/PNG/WebP)
3. Update paths in `data/content.ts`:
```typescript
image: "/projects/your-image.jpg"
```

### Add More Projects
Add to the `projects` array in `data/content.ts`.

### Update Metadata
Edit `app/layout.tsx` for SEO:
```typescript
title: "Your Name | Portfolio"
description: "Your custom description"
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Node Modules Issues
```bash
# Delete and reinstall
rm -r node_modules
npm install
```

### Build Errors
```bash
# Check for TypeScript errors
npm run build
```

### Styling Not Working
- Clear browser cache
- Restart dev server
- Check Tailwind CSS is installed

## Next Steps

1. **Customize content** - Edit `data/content.ts`
2. **Add project images** - Create `public/projects/` folder
3. **Test locally** - Run `npm run dev` and test all sections
4. **Deploy** - See `DEPLOYMENT.md` for Vercel setup

## Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org
- **Vercel Docs**: https://vercel.com/docs

## Need Help?

- Check `CUSTOMIZATION.md` for detailed customization guide
- See `DEPLOYMENT.md` for deployment instructions
- Read component comments in the code for context
- Search the official Next.js docs for specific features

---

**You're all set! Start customizing your portfolio and showcase your skills to the world.** 🚀
