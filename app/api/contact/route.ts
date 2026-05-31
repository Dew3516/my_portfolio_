import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Message from '@/lib/models/Message';
import nodemailer from 'nodemailer';
import { validateContactForm } from '@/lib/validation';
import { checkRateLimit, getClientIP } from '@/lib/rateLimit';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

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

    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const notifyEmail = process.env.NOTIFY_EMAIL || emailUser;

    if (!emailUser || !emailPassword || !notifyEmail) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please try WhatsApp or email me directly.' },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Send email notification
    await transporter.sendMail({
      from: emailUser,
      to: notifyEmail,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    let messageId: unknown = null;

    if (process.env.MONGODB_URI) {
      try {
        await connectDB();

        const newMessage = new Message({
          name,
          email,
          subject,
          message,
        });

        await newMessage.save();
        messageId = newMessage._id;
      } catch (databaseError) {
        console.error('Message saved by email, but database save failed:', databaseError);
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I will get back to you soon.',
        id: messageId,
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
