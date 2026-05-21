import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Message from '@/lib/models/Message';
import nodemailer from 'nodemailer';
import { validateContactForm } from '@/lib/validation';
import { checkRateLimit, getClientIP } from '@/lib/rateLimit';

// Configure nodemailer - update with your email credentials
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limit (5 messages per hour)
    const rateLimitCheck = checkRateLimit(clientIP, 5, 3600000);
    if (!rateLimitCheck.allowed) {
      const resetDate = new Date(rateLimitCheck.resetTime).toLocaleTimeString();
      return NextResponse.json(
        {
          error: `Too many messages. Please try again after ${resetDate}`,
          retryAfter: Math.ceil((rateLimitCheck.resetTime - Date.now()) / 1000),
        },
        { status: 429, headers: { 'Retry-After': String(Math.ceil((rateLimitCheck.resetTime - Date.now()) / 1000)) } }
      );
    }

    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate form data
    const validationErrors = validateContactForm({ name, email, subject, message });
    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', validationErrors },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();

    // Create and save message
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();

    // Send email notification
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFY_EMAIL || process.env.EMAIL_USER,
        subject: `New Portfolio Message from ${name}`,
        html: `
          <h2>New Message from Your Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the API if email fails, just log it
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I will get back to you soon.',
        id: newMessage._id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve messages (optional - for admin dashboard)
export async function GET(request: NextRequest) {
  try {
    // Add authentication check here if needed
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await connectDB();
    const messages = await Message.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, count: messages.length, messages },
      { status: 200 }
    );
  } catch (error) {
    console.error('GET messages error:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve messages' },
      { status: 500 }
    );
  }
}
