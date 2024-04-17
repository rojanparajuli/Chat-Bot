document.addEventListener('DOMContentLoaded', function() {
    const chatOutput = document.getElementById('chat-output');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function() {
        sendMessage();
    });

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userMessage = userInput.value;
        if (userMessage.trim() !== '') {
            displayMessage(userMessage, 'user');
            setTimeout(() => {
                getBotResponse(userMessage);
            }, 1000); // Simulate typing delay
            userInput.value = '';
        }
    }

    function getBotResponse(message) {
        fetch('script.json')
            .then(response => response.json())
            .then(data => {
                const intents = data.intents;
                const normalizedMessage = message.toLowerCase();

                let response = "I'm sorry, I don't understand that.";

                // Loop through intents and check for matching patterns
                intents.forEach(intent => {
                    if (intent.patterns.some(pattern => pattern.toLowerCase() === normalizedMessage)) {
                        // Randomly select a response from the matched intent
                        response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
                    }
                });

                simulateTyping(response);
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });
    }

    function simulateTyping(message) {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'bot', 'typing');
        typingIndicator.innerText = 'Typing...';
        chatOutput.appendChild(typingIndicator);

        setTimeout(() => {
            typingIndicator.style.display = 'none';
            displayMessage(message, 'bot');
        }, 1000 + (Math.random() * 1000)); // Simulate typing duration......................
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);

        const iconElement = document.createElement('div');
        iconElement.classList.add(sender === 'user' ? 'user-icon' : 'bot-icon');
        iconElement.innerHTML = `<i class="${sender === 'user' ? 'fas fa-user' : 'fas fa-robot'}"></i>`;
        messageElement.appendChild(iconElement);

        const messageContentElement = document.createElement('div');
        messageContentElement.classList.add('message-content');
        messageContentElement.innerText = message;
        messageElement.appendChild(messageContentElement);

        chatOutput.appendChild(messageElement);

        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
});
