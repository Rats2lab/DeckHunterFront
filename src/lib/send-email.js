import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Puedes usar otros servicios de correo como Outlook, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER, // Tu email
        pass: process.env.EMAIL_PASS, // Tu contraseña de aplicación
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Enviar el correo a ti mismo
      subject: 'Nuevo Lead Magnet',
      text: `Nuevo lead magnet: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
};

export default handler;
