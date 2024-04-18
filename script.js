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
            }, 1000); // Simulate typing delay...............................................
            userInput.value = '';
        }
    }
    function getBotResponse(message) {
        data_file = '/script.json'
        console.log("data", data_file)

        // 
        fetch('./script.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Work with your JSON data here
                // console.log(data);
                // console.log("question", message)
                let response = ''
                for (let pattern of data) {
                    // console.log(pattern['patterns'])
                    pattern['patterns'].forEach((question, index) => {
                        // console.log(question)
                        if (message.toLowerCase().includes(question.toLowerCase())) {
                            // If the message contains the question
                            // You can perform your desired action here
                            // console.log("hello", pattern['responses'])
                            response = pattern['responses']
                        }                        
                    })
                    }
                if (response != '') {
                    console.log("response", response)
                    simulateTyping(response[0])
                }
                else {
                    console.log(response, "else response")
                    simulateTyping("sorry I am still learning")
                }
                // simulateTyping(false)
                return false;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });


    // 
        // fetch(data_file)
        //     .then(response => response.json())
        //     .then(data => {
        //         const intents = data.intents;
        //         const normalizedMessage = message.toLowerCase();

        //         let response = "I'm sorry, I don't understand that.";

        //         intents.forEach(intent => {
        //             if (intent.patterns.some(pattern => pattern.toLowerCase() === normalizedMessage)) {
        //                 response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
        //             }
        //         });

        //         simulateTyping(response);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching JSON:', error);
        //     });
    }

    function simulateTyping(message) {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'bot', 'typing');
        typingIndicator.innerText = 'Typing...';
        chatOutput.appendChild(typingIndicator);

        console.log(message, "out put message")

        setTimeout(() => {
            typingIndicator.style.display = 'none';
            displayMessage(message, 'bot');
        }, 1000 + (Math.random() * 1000)); // Simulate typing duration..................................
    }

    function displayMessage(message, sender) {
        console.log(message, sender)
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
