import { createTransport } from 'nodemailer';
import 'dotenv/config';
import { templateHtml } from './template.js';

export const transporter = createTransport({
    host: process.env.HOST,
    port: process.env.PORT_ETHEREAL,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

export const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Bienvenido/a',
    // text: 'Este es el texto del email',
    // html: `<h1>Bienvenido a Coderhouse</h1>`,
    html: templateHtml,
    attachments: [
        {
            path: process.cwd() + '/src/services/adjunto.txt',
            filename: `resumen-de-cuenta-${process.env.EMAIL}`
        }
    ]
};