import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend is running');
})

app.post('/send-email', async (req, res) => {
    try {

        const { name, email, subject, message } = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.user,
                pass: process.env.pass,
            }
        });
        const Client_mail_Options = {
            from: 'creovate.io@gmail.com',
            to: email,
            subject: 'Thank You for Reaching Out to CREOVATE.IO',
            text: `
            Hi ${name},

            Thank you for reaching out to  CREOVATE.IO!
            We’ve received your message and your response has been successfully recorded.
            Our team will review your inquiry and get back to you shortly. We appreciate your interest in our services—whether it's web development, video editing, SEO, or digital marketing, we’re excited to connect with you.
            If you have any urgent queries, feel free to reply to this email.

            Warm regards,
            The CREOVATE.IO Team
            https://creovate-io.vercel.app
            Innovate. Create. Elevate.`
        };
        const Owner_mail_Options = {
            from: 'creovate.io@gmail.com',
            to: 'creovate.io@gmail.com',
            subject: "service request" + ' - ' + subject + ' - ' + name,
            text: `
                client name : ${name}
                client email : ${email}
                client subject : ${subject}
                client message : ${message}
                `
        };
            await transporter.sendMail(Client_mail_Options);
            await transporter.sendMail(Owner_mail_Options);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});


app.listen(PORT, () => console.log("server is running on port " + PORT));