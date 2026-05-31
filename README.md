# Shashini Dewmini Portfolio

A personal portfolio website built with Next.js, React, Tailwind CSS, Framer Motion, Three.js, MongoDB, and Nodemailer.

## Features

- Responsive portfolio landing page
- About, education, skills, certificates, and projects sections
- Dark mode toggle
- Contact details section
- Contact form with validation, email notifications, and optional MongoDB storage
- Admin API endpoints for reading, deleting, and marking contact messages as read

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber
- MongoDB / Mongoose
- Nodemailer
- Vercel deployment

## Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
ADMIN_SECRET=your_admin_secret

EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
NOTIFY_EMAIL=your_email@gmail.com
```

For Gmail, `EMAIL_PASSWORD` must be a Gmail App Password, not your normal Gmail password.

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs ESLint.

## Contact Form Notes

The contact form sends messages through Nodemailer. MongoDB storage is optional at runtime:

- If `MONGODB_URI` is configured, messages are saved to MongoDB after email is sent.
- If `MONGODB_URI` is missing or unavailable, email sending can still work.

For Vercel, add the same environment variables in:

```text
Project Settings -> Environment Variables
```

Then redeploy the project.

## Project Structure

```text
app/
  api/contact/          Contact form API routes
  components/           UI sections and reusable components
  page.tsx              Main portfolio page
lib/
  models/               Mongoose models
  mongodb.ts            MongoDB connection helper
  rateLimit.ts          Contact API rate limiter
  validation.ts         Contact form validation
public/                 Static assets
```

## Deployment

This project is ready to deploy on Vercel.

Before deploying, make sure these variables are set in Vercel:

```text
EMAIL_SERVICE
EMAIL_USER
EMAIL_PASSWORD
NOTIFY_EMAIL
MONGODB_URI
ADMIN_SECRET
```

Then deploy from the `main` branch.
