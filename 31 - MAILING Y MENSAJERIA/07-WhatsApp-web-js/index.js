//npm i whatsapp-web.js

//npm i qrcode-terminal

import qrcode from 'qrcode-terminal';
import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    console.log(message);
	if(message.body === 'hola') {
		client.sendMessage(message.from, 'Hola soy el bot de whatsapp');
	}
});

client.initialize();
