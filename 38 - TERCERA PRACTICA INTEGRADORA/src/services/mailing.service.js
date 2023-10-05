import { createTransport } from "nodemailer";
import config from "../config/config.js";

const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: config.EMAIL,
        pass: config.PASSWORD
    }
});

const createMsgRegister = (first_name) => {
    return `<h1>Hola ${first_name}, ¡Bienvenido/a a Coderhouse!</h1>`
};

const createMsgReset = (first_name) => {
    return `<h1>Hola ${first_name}, ¡Hacé click 
    <a href='http://localhost:8080/api/new-pass'>AQUI</a> 
    para restablecer tu contraseña!</h1>`
};

export const sendMail = async(user, service, token = null) => {
    try {
       const { first_name, email } = user;
       let msg = '';
       service === 'register'
       ? msg = createMsgRegister(first_name)
       : service === 'resetPass'
       ? msg = createMsgReset(first_name)
       : msg = '';

       let subj = '';
       subj = 
       service === 'register'
       ? 'Bienvenido/a'
       : service === 'resetPass'
       ? 'Restablecimiento de contraseña'
       : ''; 

       const gmailOptions = {
        from: config.EMAIL,
        to: email,
        subject: subj,
        html: msg
       };

       const response = await transporter.sendMail(gmailOptions);
       if(token !== null) return token;
       console.log('email enviado');
    } catch (error) {
        throw new Error(error.message);
    }
};
