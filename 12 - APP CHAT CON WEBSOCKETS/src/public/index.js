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
    actions.innerHTML = ''
    const chatRender = arrayMsgs.map((msg)=>{
        return `<p><strong>${msg.username}</strong>: ${msg.message}</p>`
    }).join(' ')
    output.innerHTML = chatRender
})

socket.on('msg', (msg)=>{
    console.log(msg);
})

socket.on('newUser', (user) => {
    Toastify({
        text: `🟢 ${user} is logged in`,
        duration: 3000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        // onClick: function(){} // Callback after click
      }).showToast();
})

message.addEventListener('keypress', ()=>{
    socket.emit('chat:typing', username)
})

socket.on('chat:typing', (user)=>{
    actions.innerHTML = `<p>${user} is writing a message...</p>`
})