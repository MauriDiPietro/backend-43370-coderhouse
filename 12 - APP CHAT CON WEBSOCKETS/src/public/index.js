const socket = io();

let username = null;

if(!username) {
    Swal.fire({
        title: '¡Welcome to chat!',
        text: 'Insert your username',
        input: 'text',
        inputValidator: (value) =>{
            if(!value) return 'Your username is required'
        }
    })
    .then((input)=>{
        username = input.value;
        socket.emit('newUser', username);
    })
}

const message = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const actions = document.getElementById('actions');

btn.addEventListener('click', ()=>{
    socket.emit('chat:message', {
        username,
        message: message.value
    })
    message.value = '';
})

socket.on('messages', (arrayMsgs)=>{
    const chatRender = arrayMsgs.map((msg)=>{
        return `<p><strong>${msg.username}</strong>: ${msg.message}</p>`
    }).join(' ')
    output.innerHTML = chatRender
})

socket.on('msg', (msg)=>{
    console.log(msg);
})