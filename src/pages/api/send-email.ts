import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailRequest extends NextApiRequest {
  body: {
    email: string;
  };
}

export default async (req: EmailRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., use 'gmail' or 'hotmail'
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send email to yourself
      subject: 'Deck Hunter New Lead Magnet',
      text: `Deck Hunter New lead magnet: ${email}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
