import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// Configure your email service
// For Gmail, you'll need to use an app-specific password
// For other services, adjust the configuration accordingly
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, contactNumber, message } =
      await request.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !contactNumber || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "rxboyboy@gmail.com", // Your personal email
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Contact Number: ${contactNumber}

Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${firstName},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>The Portfolio Team</p>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
