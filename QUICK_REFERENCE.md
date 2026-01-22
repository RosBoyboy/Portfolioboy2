# Quick Reference Card

## 🚀 Getting Started (5 Minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# Visit: http://localhost:3000
```

---

## ✏️ Content to Update

**File: `data/content.ts`**

### Update Your Info
```javascript
hero: {
  name: "Your Name",                    // ← CHANGE THIS
  title: "Your Job Title",              // ← CHANGE THIS
  statement: "Your bio statement...",   // ← CHANGE THIS
}

social: {
  email: "your.email@example.com",      // ← CHANGE THIS
  github: "https://github.com/...",     // ← CHANGE THIS
  linkedin: "https://linkedin.com/...", // ← CHANGE THIS
}
```

### Add Your Projects
Replace the three example projects with your own.

```javascript
projects: [
  {
    id: 1,
    title: "Your Project Name",
    subtitle: "What I Already Know",
    description: "What this project does...",
    technologies: ["React", "TypeScript", "Node.js"],
    githubLink: "https://github.com/yourusername/project",
    liveLink: "https://your-project.vercel.app",
    highlights: ["Key feature 1", "Key feature 2", "Key feature 3"],
  },
  // Project 2 (What I Recently Learned)
  // Project 3 (What I Aspire to Build)
]
```

### Update Learning
```javascript
learning: {
  technologies: [
    {
      category: "Your Category",
      items: ["Technology 1", "Technology 2", "Technology 3"],
    },
  ],
}
```

---

## 🎨 Change Colors

**File: `tailwind.config.ts`**

```typescript
colors: {
  primary: "#3f46e6",    // Main color (indigo)
  secondary: "#1e293b",  // Background (slate)
  accent: "#0ea5e9",     // Highlight (cyan)
}
```

**Popular Color Codes:**
- Indigo: `#3f46e6`
- Cyan: `#0ea5e9`
- Blue: `#0284c7`
- Purple: `#9333ea`
- Pink: `#ec4899`

---

## 📁 Add Project Images

1. Create folder: `public/projects/`
2. Add images (JPG, PNG, WebP)
3. Update in `data/content.ts`:

```javascript
image: "/projects/your-image.jpg"
```

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server (test locally)
npm start

# Deploy to Vercel
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import repository
# 4. Done! (auto-deploys on push)
```

---

## 🔧 Common Commands

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Check code quality |

---

## 📱 Section Structure

```
Website
├── Header (navigation)
├── Hero Section (introduction)
├── Projects Section (three projects)
├── Learning Section (technologies)
└── Footer (contact & links)
```

---

## 🎯 The Big Three Projects

### Project 1: What I Already Know
- A completed project
- Shows solid foundation
- Use familiar tech stack
- Example: E-commerce, Blog, Dashboard

### Project 2: What I Recently Learned
- A newer project
- Uses new technologies
- Shows growth
- Example: AI integration, Real-time features

### Project 3: What I Aspire to Build
- Ambitious or in-progress
- Shows forward thinking
- Can be partially complete
- Example: Complex system, Emerging tech

---

## 🎓 Learning Section Categories

Suggest categories:
- Backend & Infrastructure
- AI & Machine Learning
- Frontend Frameworks
- DevOps & Cloud
- Database Technologies
- Development Tools

---

## ✨ Pro Tips

1. **Keep it fresh** - Update projects regularly
2. **Be authentic** - Let your personality show
3. **Mobile first** - Test on phones
4. **Fast & clean** - Good performance is key
5. **Link everything** - GitHub, LinkedIn, email
6. **Show growth** - Highlight learning
7. **Quality over quantity** - 3 great projects > 10 mediocre
8. **Professional tone** - But stay genuine

---

## 🚨 Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Node modules broken?**
```bash
rm -r node_modules
npm install
```

**Build fails?**
```bash
npm run build  # See error details
```

**Styles not working?**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Restart dev server

---

## 📚 Documentation

- `README.md` - Main documentation
- `GETTING_STARTED.md` - Setup guide
- `CUSTOMIZATION.md` - Detailed customization
- `DEPLOYMENT.md` - Deploy to Vercel
- `PROJECT_SUMMARY.md` - Full overview

---

## 🔗 Useful Links

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Vercel**: https://vercel.com
- **TypeScript**: https://www.typescriptlang.org

---

## ✅ Before Launch Checklist

- [ ] Updated your name, title, bio
- [ ] Added your three projects
- [ ] Updated learning technologies
- [ ] Updated social links
- [ ] Added project images (optional)
- [ ] Changed colors (optional)
- [ ] Tested on mobile
- [ ] Tested all links
- [ ] Build succeeds (`npm run build`)
- [ ] Ready to deploy!

---

**Start customizing now. You've got this! 🚀**
