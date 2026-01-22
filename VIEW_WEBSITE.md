# 🚀 How to View Your Portfolio Website

## Quick Start - 3 Simple Steps

### Step 1: Open Terminal
Open PowerShell or Command Prompt and navigate to your project:

```powershell
cd "c:\Users\Student\Documents\portfolio(boy)\portfolio-website"
```

### Step 2: Start the Development Server
Run this command:

```powershell
npm run dev
```

You should see output like this:
```
> portfolio-website@1.0.0 dev
> next dev

  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 1234ms
```

### Step 3: Open in Browser
Click this link or copy-paste it into your browser:

**👉 http://localhost:3000**

---

## 📍 What You'll See

When you open the website, you'll see:

1. **Header** - Navigation bar at the top (sticky)
   - Logo
   - Navigation links (Home, Projects, Learning, Contact)
   - "Get in Touch" button
   - Mobile hamburger menu

2. **Hero Section** - Large introduction area
   - Your name (currently "Your Name")
   - Your job title
   - Professional statement
   - "View My Work" and "Contact Me" buttons
   - Social media icons
   - Scroll down indicator

3. **Projects Section** - Three featured projects
   - Project 1: What I Already Know
   - Project 2: What I Recently Learned
   - Project 3: What I Aspire to Build
   - Each with title, description, tech stack, and links

4. **Learning Section** - Technologies you're studying
   - Interactive tabs (click to switch categories)
   - Technology cards
   - Growth mindset messaging

5. **Footer** - Bottom section
   - Copyright info
   - Quick links
   - Social media links

---

## 🎨 Customizing What You See

### Change Your Name & Title

Edit `data/content.ts`:

```typescript
hero: {
  name: "Ros P. Boyboy",        // ← Change to YOUR NAME
  title: "Student 3rd year",  // ← Change to YOUR TITLE
  statement: "Your bio...", // ← Change to YOUR BIO
}
```

**Save the file** → Browser automatically refreshes! (Hot reload)

### Change Your Projects

Still in `data/content.ts`, find the `projects` array and update:

```typescript
projects: [
  {
    id: 1,
    title: "Ros P. Boyboy",      // ← Change
    subtitle: "What I Already Know",
    description: "The World Shall know The Pain",    // ← Change
    technologies: ["React", "Node"],  // ← Change
    // ... more fields
  },
]
```

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "#3f46e6",    // Change this
  secondary: "#1e293b",  // Change this
  accent: "#0ea5e9",     // Change this
}
```

---

## 💻 Common Commands

### Start Development Server (Best for Testing)
```powershell
npm run dev
```
- Opens at http://localhost:3000
- Changes reload automatically
- You see live updates as you edit
- **Use this while customizing!**

### Build for Production
```powershell
npm run build
```
- Creates optimized version for Vercel
- Creates `.next` folder
- No console shown, you get a summary

### Run Production Server Locally
```powershell
npm start
```
- Starts the production server
- Must run `npm run build` first
- Tests how it will look when deployed

### Check Code Quality
```powershell
npm run lint
```
- Checks for code errors
- Checks formatting
- Shows warnings if any

---

## 🌐 Testing on Different Devices

### Test on Mobile (Same Computer)
While `npm run dev` is running:

1. Open browser DevTools (F12)
2. Click the phone icon 📱 (top left of DevTools)
3. Select "iPhone" or "Android"
4. See how it looks on mobile!

### Test on Another Computer
While `npm run dev` is running:

1. Find your computer's IP address:
```powershell
ipconfig
```
Look for "IPv4 Address" (something like 192.168.x.x)

2. On other computer, visit:
```
http://192.168.x.x:3000
```

### Test on Your Phone (Same WiFi)
1. Find your computer's IP (see above)
2. On your phone, open browser
3. Visit: `http://192.168.x.x:3000`

---

## 📝 Full Development Workflow

```
1. Open Terminal
   └─ cd "c:\Users\Student\Documents\portfolio(boy)\portfolio-website"

2. Start Dev Server
   └─ npm run dev
   └─ Open http://localhost:3000

3. Edit Files
   └─ Edit data/content.ts
   └─ Edit app/globals.css
   └─ Edit components/*.tsx
   └─ Changes reload automatically!

4. Test Changes
   └─ Check desktop view
   └─ Check mobile view (F12)
   └─ Test all links
   └─ Check on phone

5. Stop Dev Server
   └─ Press Ctrl+C in terminal

6. Build for Production
   └─ npm run build
   └─ Creates .next folder

7. Deploy
   └─ npm start (test)
   └─ Or push to Vercel
```

---

## 🔄 Hot Reload (Live Changes)

When you use `npm run dev`, the website automatically reloads when you save files!

**Try this:**
1. Open http://localhost:3000
2. Edit `data/content.ts` → Change your name
3. Save the file (Ctrl+S)
4. Website updates instantly! ✨

---

## ⚠️ Common Issues & Solutions

### "Port 3000 Already in Use"
```powershell
npm run dev -- -p 3001
```
Uses port 3001 instead

### "Cannot find module"
```powershell
npm install
```
Reinstall dependencies

### "npm: The term 'npm' is not recognized"
Node.js/npm not installed properly
- Download from https://nodejs.org
- Reinstall Node.js

### Styles Don't Load
1. Hard refresh: `Ctrl+Shift+R`
2. Clear browser cache: `Ctrl+Shift+Delete`
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Changes Not Showing
1. Save file (Ctrl+S)
2. Check browser DevTools console for errors
3. Restart dev server: `Ctrl+C` then `npm run dev`

---

## 🎯 What to Do Right Now

### Option 1: Just View It (1 minute)
```powershell
cd "c:\Users\Student\Documents\portfolio(boy)\portfolio-website"
npm run dev
```
Then open http://localhost:3000

### Option 2: Customize It (20 minutes)
```powershell
cd "c:\Users\Student\Documents\portfolio(boy)\portfolio-website"
npm run dev
```

Then:
1. Keep terminal open
2. Open `data/content.ts` in code editor
3. Change your name
4. Save (Ctrl+S)
5. Watch website update!
6. Continue customizing

### Option 3: Deploy It (5 minutes)
```powershell
npm run build
```

Then:
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Done!

---

## 📚 Related Commands

| Task | Command |
|------|---------|
| View website | `npm run dev` |
| Build for production | `npm run build` |
| Run production server | `npm start` |
| Check code quality | `npm run lint` |
| Install dependencies | `npm install` |
| Update dependencies | `npm update` |
| Clear cache | `npm cache clean --force` |

---

## 🌍 After You're Done

### Stop the Development Server
Press `Ctrl+C` in the terminal

Output will show:
```
^C
PS C:\Users\Student\Documents\portfolio(boy)\portfolio-website>
```

### To Start Again Later
```powershell
npm run dev
```

---

## 📱 Quick Testing Checklist

When you run the website, test:

- [ ] Hero section displays correctly
- [ ] Your name and title show
- [ ] Click "View My Work" - scrolls to projects
- [ ] Click "Contact Me" - opens email
- [ ] Projects section displays all 3 projects
- [ ] Click on project links (GitHub, Live)
- [ ] Learning section tabs work
- [ ] Click different categories
- [ ] Click social icons in header
- [ ] Click social icons in footer
- [ ] Mobile view works (F12)
- [ ] Hamburger menu opens on mobile
- [ ] All text is readable
- [ ] Colors look good

---

## 🎉 Success!

If you see:
1. Website loads at http://localhost:3000 ✅
2. Your content displays ✅
3. All sections visible ✅
4. Mobile menu works ✅
5. Links functional ✅

**Then you're all set!** Now customize it and deploy! 🚀

---

## 💡 Pro Tips

1. **Keep dev server running** while editing
2. **Save files with Ctrl+S** to trigger hot reload
3. **Use F12** to test mobile view
4. **Check terminal** for any error messages
5. **Use browser DevTools** to inspect elements
6. **Test on actual phone** before deploying

---

## 🔗 Quick Links

| Resource | Link |
|----------|------|
| **Your Website** | http://localhost:3000 |
| **Edit Content** | `data/content.ts` |
| **Edit Styles** | `tailwind.config.ts` |
| **View Code** | `components/` folder |
| **Documentation** | `START_HERE.md` |
| **Deploy** | https://vercel.com |

---

**Ready? Open your terminal and run `npm run dev` now!** 🚀
