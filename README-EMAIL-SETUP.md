# Email Setup Guide

This project uses a custom email system with Gmail SMTP to send professional branded emails.

## Features

- ✅ Professional branded confirmation emails to users
- ✅ Separate notification emails to you (one per submission)
- ✅ Beautiful HTML email templates matching your brand colors (#1E90FF)
- ✅ Completely free (uses Gmail SMTP)

## Setup Instructions

### 1. Gmail App Password

You already have:
- Email: `bugslayer555@gmail.com`
- App Password: `yantzzhpinjtmqvb`

### 2. Environment Variables

Create a `.env` file in the root directory with:

```env
SMTP_USER=bugslayer555@gmail.com
SMTP_PASS=yantzzhpinjtmqvb
RECIPIENT_EMAIL=bugslayer555@gmail.com
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Local Development

Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

Run the development server:
```bash
netlify dev
```

This will:
- Start Vite dev server on port 8080
- Start Netlify Functions on port 8888
- The contact form will work automatically

### 5. Deploy to Netlify

1. Push your code to GitHub/GitLab
2. Connect your repo to Netlify
3. Add environment variables in Netlify dashboard:
   - Go to Site settings → Environment variables
   - Add: `SMTP_USER`, `SMTP_PASS`, `RECIPIENT_EMAIL`
4. Deploy!

## How It Works

1. User submits the contact form
2. Frontend sends data to `/netlify/functions/send-email`
3. Serverless function sends TWO emails:
   - **Confirmation email** to the user (branded, professional)
   - **Notification email** to you (with all form details)
4. Each email has a unique timestamp in the subject to prevent threading

## Email Templates

- **Confirmation Email**: Branded with your blue theme, includes thank you message and free trial offer
- **Notification Email**: Clean table format with all user details, reply-to set to user's email

## Troubleshooting

- **Emails not sending**: Check that environment variables are set correctly
- **Local dev not working**: Make sure Netlify CLI is installed and running `netlify dev`
- **Gmail blocking**: Make sure 2-Step Verification is enabled and you're using an App Password




