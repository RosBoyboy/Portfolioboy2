# Email Integration Setup for Vercel

Your email system sends emails to **both**:
1. ✅ The customer (confirmation email)
2. ✅ Your inbox at `rxboyboy@gmail.com` (contact form submission)

Follow these steps to make it work in production (Vercel):

## Step 1: Get Gmail App Password

Since Gmail doesn't allow regular passwords for third-party apps, you need an **App Password**:

1. Go to: https://myaccount.google.com/
2. Click **Security** in the left menu
3. Enable **2-Factor Authentication** (if not already enabled)
4. Go back to Security → Scroll down to **App passwords**
5. Select **Mail** and **Windows Computer** (or your device)
6. Google will generate a 16-character password
7. **Copy this password** (you'll need it in Step 2)

## Step 2: Set Environment Variables in Vercel

1. Go to: https://vercel.com/dashboard
2. Click on your project: **portfolio-website**
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**

**Add these two variables:**

| Variable Name | Value |
|---|---|
| `EMAIL_USER` | rxboyboy@gmail.com |
| `EMAIL_PASSWORD` | [Paste the 16-char password from Step 1] |

5. Make sure to select all environments: **Production**, **Preview**, **Development**
6. Click **Save**

## Step 3: Redeploy Your Site

1. Go to **Deployments** in Vercel
2. Click the three dots on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

## Step 4: Test It Works

1. Go to your live website (e.g., https://your-portfolio.vercel.app)
2. Fill out the contact form
3. Submit it
4. Check:
   - Your email (rxboyboy@gmail.com) should receive the form submission
   - The customer should receive a confirmation email

## Troubleshooting

### Issue: "Email service not configured"
- Your environment variables aren't set in Vercel
- Go back to Step 2 and make sure they're in **Production** environment

### Issue: "Failed to send email"
- App Password might be wrong
- Gmail 2FA might not be enabled
- The email account might have blocked app access
- Try regenerating the App Password in Step 1

### Issue: "It works locally but not in production"
- Local: Uses `.env.local` file
- Production: Uses Vercel environment variables
- Make sure variables are set in the **correct environment** in Vercel

## Your Email Flow

```
Customer Submits Form
         ↓
   [Send Email API]
         ↓
    ┌─────┴─────┐
    ↓           ↓
Customer Email → rxboyboy@gmail.com
(Confirmation)  (Form Submission)
```

Both emails use your Gmail account to send, so make sure your App Password is correct!
