# Deployment Guide

This guide covers how to deploy your portfolio website to Vercel and other hosting platforms.

## Quick Start: Deploy to Vercel (Recommended)

### Option 1: Using Vercel Dashboard (Easiest)

1. **Push your project to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com) and sign up/login**

3. **Click "Add New Project"**

4. **Import your GitHub repository**
   - Select the repository containing your portfolio
   - Vercel will auto-detect Next.js configuration
   - Click "Deploy"

5. **Your site is live!**
   - Vercel will assign a domain like `your-project.vercel.app`
   - Any push to the `main` branch automatically redeploys

### Option 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from your project directory**
   ```bash
   vercel
   ```

3. **Follow the prompts to link your project**

## Custom Domain Setup

1. **Go to your project dashboard on Vercel**

2. **Navigate to Settings → Domains**

3. **Add your custom domain**
   - Enter your domain name (e.g., `yourname.com`)

4. **Update DNS Records**
   - Vercel will show you the DNS records to add
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the records provided by Vercel

5. **Wait for DNS propagation** (usually 5 minutes to 24 hours)

## Environment Variables

If you need environment variables (for APIs, databases, etc.):

1. **Create `.env.local` file**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Add your variables**
   ```
   NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
   API_KEY=your_secret_key
   ```

3. **In Vercel Dashboard:**
   - Go to Settings → Environment Variables
   - Add the same variables
   - Redeploy

## Performance Optimization

### Image Optimization
- Use Next.js `Image` component instead of `<img>`
- Images are automatically optimized and cached

### Code Splitting
- Components are automatically code-split by Next.js
- Only necessary code is sent to the browser

### Caching Strategies
- Static pages are cached on Vercel's edge network
- ISR (Incremental Static Regeneration) can be configured for dynamic content

## Monitoring & Analytics

### Vercel Analytics
1. Go to project Settings
2. Enable Web Analytics
3. View performance metrics in Analytics tab

### Core Web Vitals
- Monitor in Vercel Dashboard
- Check Google PageSpeed Insights for detailed recommendations

## Security Best Practices

1. **Never commit secrets**
   - Use `.env.local` for development
   - Add to `.gitignore`
   - Use Vercel's environment variables for production

2. **Keep dependencies updated**
   ```bash
   npm update
   ```

3. **Use HTTPS** (automatically enabled by Vercel)

4. **Add security headers** (optional advanced setup)

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run build`

### Site Shows Old Content
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Check deployment status in Vercel Dashboard

### DNS Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correctly entered
- Use MXToolbox.com to check DNS resolution

## Other Deployment Options

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### AWS Amplify
1. Connect GitHub repository
2. Follow AWS Amplify setup wizard
3. Automatic deployments on push

### Self-Hosted (VPS)
```bash
# Build the application
npm run build

# Start production server
npm start
```

## Local Development

### Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## Continuous Deployment

Vercel automatically deploys when you:
- Push to `main` branch
- Create a pull request (preview deployment)
- Update environment variables

## Contact & Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
