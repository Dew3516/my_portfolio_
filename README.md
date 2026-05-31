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


