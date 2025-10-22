import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import twilio from "twilio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Email configuration (Hotmail/Outlook SMTP)
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'bertintshisuaka@hotmail.com',
      pass: process.env.EMAIL_PASSWORD || 'your-password',
    },
  });

  // Twilio SMS configuration (optional - can be added later)
  const twilioClient = process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN
    ? twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    : null;

  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Send email to Bertin
      const mailOptions = {
        from: process.env.EMAIL_USER || 'bertintshisuaka@hotmail.com',
        to: 'bertintshisuaka@hotmail.com',
        subject: `New Consultation Request from ${name}`,
        html: `
          <h2>🎯 New Consultation Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>This is an automated message from your Divalaser website contact form.</em></p>
        `,
      };

      await transporter.sendMail(mailOptions);

      // Send SMS if Twilio is configured
      if (twilioClient && process.env.TWILIO_PHONE_NUMBER) {
        try {
          await twilioClient.messages.create({
            body: `New consultation request from ${name}. Email: ${email}. Check your email for details.`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: '+16789796811',
          });
          console.log('SMS sent successfully to +16789796811');
        } catch (smsError) {
          console.error('SMS sending failed:', smsError);
          // Don't fail the request if SMS fails
        }
      } else {
        console.log('Twilio not configured - SMS notifications disabled');
      }

      // Send confirmation email to the user
      const confirmationEmail = {
        from: process.env.EMAIL_USER || 'bertintshisuaka@hotmail.com',
        to: email,
        subject: 'Thank you for contacting Divalaser Software Solutions',
        html: `
          <h2>Thank you, ${name}!</h2>
          <p>We have received your consultation request and will get back to you shortly.</p>
          <p>Our team will review your message and contact you within 24 hours.</p>
          <p><strong>Divalaser Software Solutions</strong></p>
          <p>Email: bertintshisuaka@hotmail.com</p>
          <p>Phone: +1 (678) 979-6811</p>
          <p>Website: https://divalaser.com</p>
          <p><em>Empowering Africa Through Digital Innovation</em></p>
        `,
      };

      await transporter.sendMail(confirmationEmail);

      res.json({ success: true, message: 'Thank you! We will contact you soon via email.' });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: 'Failed to process contact form' });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log('Contact form endpoint available at /api/contact');
    console.log('Email notifications configured for:', process.env.EMAIL_USER);
  });
}

startServer().catch(console.error);
