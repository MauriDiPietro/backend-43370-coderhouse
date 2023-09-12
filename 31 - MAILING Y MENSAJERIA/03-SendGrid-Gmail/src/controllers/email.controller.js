import sgMail from '../services/email.service.js';
import 'dotenv/config';

export const sendGmail = async(req, res)=>{
    try {
        const { dest, name } = req.body;
        const gmailOptions = {
            from: process.env.EMAIL,
            to: dest,
            subject: 'Bienvenido/a',
            html: `<h1>Hola ${name}, ¡Te damos la bienvenida a Coderhouse!</h1>`,
            mail_settings: {
                sandbox_mode: {
                    enable: true
                }
            }
        };
        const response = await sgMail.send(gmailOptions);
        console.log('email enviado!');
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}