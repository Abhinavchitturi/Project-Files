const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', (event) => {
    console.log('Connected to the server');
});

socket.addEventListener('message', (event) => {
    const chatBox = document.getElementById('chat-box');
    try {
        const parsedMessage = JSON.parse(event.data);
        chatBox.innerHTML += `<p>${parsedMessage.text}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    } catch (error) {
        console.error('Error parsing message:', error);
    }
});
socket.addEventListener('message', (event) => {
    displayMessage(event.data);
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() !== '') {
        const stringMessage = JSON.stringify({ text: message });
        socket.send(stringMessage);
        messageInput.value = '';
    }
}
function displayMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('p');

    if (message instanceof Blob) {
        const reader = new FileReader();

        reader.onload = function (event) {
            messageElement.textContent = event.target.result;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        };

        reader.readAsText(message);
    } else {
        try {
            const parsedMessage = JSON.parse(message);
            if (parsedMessage && parsedMessage.text) {
                messageElement.textContent = parsedMessage.text;
            } else {
                console.error('Invalid message format:', message);
                messageElement.textContent = 'Error: Invalid message format';
            }
        } catch (error) {
            // If parsing as JSON fails, treat it as plain text
            messageElement.textContent = message;
        }

        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
}
