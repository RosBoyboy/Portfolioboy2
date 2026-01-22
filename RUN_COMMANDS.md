# 🚀 HOW TO SEE YOUR WEBSITE - EXACT COMMANDS

## ✅ THE SIMPLE ANSWER

**Copy and paste these 2 commands in PowerShell:**

```powershell
cd "c:\Users\Student\Documents\portfolio(boy)\portfolio-website"
npm run dev
```

**Then open your browser to:**
```
http://localhost:3000
```

---

## 📊 Step-by-Step Visual Guide

### STEP 1️⃣: Open PowerShell
```
1. Press: Windows Key + R
2. Type: powershell
3. Press: Enter
```

### STEP 2️⃣: Copy & Paste This Command
```powershell
cd "c:\Users\Student\Documents\portfolio(boy)\portfolio-website"
```
Press Enter

### STEP 3️⃣: Copy & Paste This Command
```powershell
npm run dev
```
Press Enter

### STEP 4️⃣: Wait for This Message
```
✓ Ready in 1234ms
  ▲ Next.js is running
  → Local: http://localhost:3000
```

### STEP 5️⃣: Open Browser
Click or type in address bar:
```
http://localhost:3000
```

---

## 🎨 What You'll See

```
┌─────────────────────────────────────┐
│      YOUR PORTFOLIO WEBSITE         │
├─────────────────────────────────────┤
│                                     │
│  [Logo] Home  Projects  Learning    │
│                      [Get in Touch] │
│                                     │
├─────────────────────────────────────┤
│                                     │
│        YOUR NAME                    │
│        Full-Stack Developer         │
│        "Your professional bio..."   │
│                                     │
│    [View My Work]  [Contact Me]     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│     FEATURED PROJECTS               │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐
│  │Project 1│ │Project 2│ │Project 3│
│  │         │ │         │ │         │
│  └─────────┘ └─────────┘ └─────────┘
│                                     │
├─────────────────────────────────────┤
│                                     │
│    CURRENTLY LEARNING               │
│  [Backend] [AI] [Frontend] [DevOps] │
│                                     │
├─────────────────────────────────────┤
│  [GitHub] [LinkedIn] [Email]        │
│        © 2026 Your Name             │
└─────────────────────────────────────┘
```

---

## ⚡ All Commands You Need

| What You Want | Command |
|--------------|---------|
| **View website** | `npm run dev` |
| **Build for production** | `npm run build` |
| **Check code quality** | `npm run lint` |
| **Stop the server** | `Ctrl + C` |
| **Use different port** | `npm run dev -- -p 3001` |

---

## 🔧 If You Get Errors

### Error: "npm: The term 'npm' is not recognized"
```
Solution: Install Node.js from https://nodejs.org
Then restart PowerShell and try again
```

### Error: "Port 3000 already in use"
```powershell
# Use a different port:
npm run dev -- -p 3001

# Then visit: http://localhost:3001
```

### Error: "Permission denied"
```
Solution: Right-click PowerShell → Run as Administrator
```

### Error: "Module not found"
```powershell
# Reinstall dependencies:
npm install
npm run dev
```

---

## ✅ Verify It's Working

When you run `npm run dev`, you should see:

```
✓ Ready in 1234ms
  ▲ Next.js 15.5.9
  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Compiled in 1234ms
```

✅ If you see this = **SUCCESS!**

---

## 🌐 Open in Browser

### Copy this address:
```
http://localhost:3000
```

### Or click directly: [http://localhost:3000](http://localhost:3000)

---

## 📱 Test on Phone

1. Get your computer's IP:
```powershell
ipconfig
```

2. Look for "IPv4 Address" (e.g., `192.168.1.100`)

3. On your phone, visit:
```
http://192.168.1.100:3000
```

---

## 🎯 Timeline

```
Command Entered
     ↓
Dependencies Loading (2-3 seconds)
     ↓
Compilation Complete (shows "Ready in XXms")
     ↓
Open http://localhost:3000
     ↓
🎉 Website Visible!
```

---

## 🛑 Stop The Server

When you're done viewing, press:
```
Ctrl + C
```

The terminal will ask "Terminate job batch?" - Type `Y` and press Enter.

---

## 🔄 Making Changes

While the server is running:
1. Edit any file in your project
2. Save the file
3. Refresh the browser (F5 or Ctrl+R)
4. See changes instantly!

**It's called "Hot Reload" - changes update automatically!**

---

## 📚 Full Documentation

For more details, see:
- `VIEW_WEBSITE.md` - Complete viewing guide
- `QUICK_REFERENCE.md` - All commands
- `CUSTOMIZATION.md` - How to change things
- `START_HERE.md` - Main guide

---

## 🎉 Ready?

**Just run these 2 lines:**

```powershell
cd "c:\Users\Student\Documents\portfolio(boy)\portfolio-website"
npm run dev
```

**Then visit:** `http://localhost:3000`

**That's it!** 🚀

---

*Your portfolio will load in real-time. Make edits, refresh browser, see changes instantly!*
