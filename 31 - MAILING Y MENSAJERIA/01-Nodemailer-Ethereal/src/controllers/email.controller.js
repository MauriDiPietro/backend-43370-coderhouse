import { mailOptions, transporter } from "../services/email.service.js";

export const sendMailEthereal = async(req, res) => {
    try {
        const response = await transporter.sendMail(mailOptions);
        console.log('mail enviado!');
        res.json(response);
    } catch (error) {
        console.log(error);
    }
}