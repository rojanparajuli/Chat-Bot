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
            getBotResponse(userMessage);
            userInput.value = '';
        }
    }

    function getBotResponse(message) {
        const greetings = ['hi', 'hello','k xa','hey','Hey','hola','Hi','Hello','HI','HELLO'];
        const iamrojanGreetings = ['I am rojan', 'I am rOjan', 'I am roJan', 'I am rojAn', 'I am rojaN'];
        const aboutrojan = ['Rojan Parajuli', 'ROJAN PARAJULI', 'rojan parajuli ', 'rojan','Rojan'];
        const aboutprayash = ['Prayash Rimal', 'PRAYASH RIMAL', 'prayash rimal','prayash','Prayash'];
        const aboutaarya = ['Aarya Poudel','Aarya poudel','aarya poudel','Aarya','aarya','1','one'];
        const aboutdeepak = ['Deepak','Deepak Bhujel','deepak','deepak bhujel']
        const normalizedMessage = message.toLowerCase();

        if (greetings.includes(normalizedMessage)) {
            displayMessage("Hello sir/ma'am, how can I help you?", 'bot');
        } else if (iamrojanGreetings.includes(normalizedMessage)) {
            displayMessage("Oh I am sorry boss, I didn't recognize you. How are you?", 'bot');
        } else if (aboutrojan.includes(normalizedMessage)) {
            displayMessage("Rojan Parajuli is a normal guy, Born in 2003 Jan 26, Kathmandu, Nepal. Currently working as Designer and Province Incharge at Gaaubesi Logistics PVT. Ltd.", 'bot');
        }else if (aboutprayash.includes(normalizedMessage)) {
            displayMessage("Mr. Praysh Rimal is a software engineer currently working at Gaaubesi Logistics PVT. LTD as a Senior Developer and IT head. He is from Bharatpur. He completed his graduation at East West Institute of Technology. He is a very talented person and is currently single. If anyone is interested, please feel free to contact him; he won't reject you. ", 'bot');
        } else if (aboutaarya.includes(normalizedMessage)) {
            displayMessage("Miss Aarya Poudel is a law student currently pursuing her bachelor's degree at Nepal Law Campus. She is very talented. During her school years, she used to top her class every year. If 'beauty with brain' was a real person, it would be Miss Aarya Poudel. Originally from Udayapur, Ghaighat, she currently resides in Radhe Radhe, Bhaktapur with her family.", 'bot');
         }else if (aboutdeepak.includes(normalizedMessage)) {
            displayMessage("Kukhura chor", 'bot');
         }else {
            // Default response if no greeting is matched
            displayMessage("I'm sorry, I don't understand that.", 'bot');
        }
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerText = message;
        chatOutput.appendChild(messageElement);

        // Scroll to the bottom of the chat output
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
});
