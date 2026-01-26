# Email Integration Setup Guide

## What's Been Updated

Your contact form now includes email integration with the following features:

### Form Fields
✅ First Name  
✅ Last Name  
✅ Email Address  
✅ Contact Number  
✅ Message  

### Email Functionality
- Emails are sent directly to: **rxboyboy@gmail.com**
- Users receive an automatic confirmation email
- Professional HTML email formatting

## Setup Instructions

### Step 1: Gmail App Password Setup

1. Go to your Gmail Account: https://myaccount.google.com/apppasswords
2. You may need to enable 2-Factor Authentication first (if not already enabled)
3. Select **Mail** and **Windows Computer**
4. Google will generate a **16-character password**
5. Copy this password (without spaces)

### Step 2: Configure Environment Variables

Open the `.env.local` file in the root directory and replace:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

**Example:**
```
EMAIL_USER=rxboyboy@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
```

### Step 3: Restart Your Development Server

```bash
npm run dev
```

## File Changes Made

### New Files Created:
1. **`app/api/send-email/route.ts`** - Backend API route that handles email sending
2. **`.env.local`** - Environment variables file for email credentials

### Updated Files:
1. **`components/ContactModal.tsx`** - Updated form with new fields and API integration

### Dependencies Added:
- **nodemailer** - Email sending library

## How It Works

1. User fills out the contact form with their details
2. Form data is sent to `/api/send-email` endpoint
3. Backend validates all required fields
4. Email is sent to rxboyboy@gmail.com with full contact details
5. Confirmation email is sent to the user
6. Success message is displayed and modal closes

## Testing

1. Start your development server: `npm run dev`
2. Click "Get in Touch" button
3. Fill out all form fields
4. Click "Send Message"
5. Check your email inbox for the received message

## Troubleshooting

**Email not sending?**
- Verify `.env.local` has correct credentials
- Check Gmail app password was generated correctly (16 characters, no spaces)
- Ensure 2-Factor Authentication is enabled on Gmail
- Restart the development server

**"All fields are required" error?**
- Make sure you filled in all 5 fields (First Name, Last Name, Email, Contact Number, Message)

**For different email services:**
If you want to use a different email service (Outlook, SendGrid, etc.), modify the `app/api/send-email/route.ts` file with appropriate transporter configuration.
