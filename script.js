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
        const greetings = ['hi', 'hello','k xa','hey','Hey','hola','Hi','Hello','HI','HELLO'];
        const iamrojanGreetings = ['I am rojan', 'I am rOjan', 'I am roJan', 'I am rojAn', 'I am rojaN'];
        const aboutrojan = ['Rojan Parajuli', 'ROJAN PARAJULI', 'rojan parajuli ','rojan','Rojan'];
        const aboutprayash = ['Prayash Rimal', 'PRAYASH RIMAL', 'prayash rimal','prayash','Prayash'];
        const aboutaarya = ['Aarya Poudel','Aarya poudel','aarya poudel','Aarya','aarya','1','one'];
        const aboutdeepak = ['Deepak','Deepak Bhujel','deepak','deepak bhujel'];
        const aboutme =['What is your name?','Who are you?','what is your name?','who are you?'];
        const aboutnitesh=[];
        const aboutbishal=[];
        const aboutsalon=[];
        const aboutdipesh=[];
        const abouttushar=[];
        const aboutsukhchandra=[];
        const aboutcompany=[];
        const aboutnepal=[];
        const aboutroughwords=['Fuck','fuck','mugi','Mugi','Bitch','bitch','Fucker','fucker','motherfucker','mother fucker','Mother fucker','Motherfucker','machikney','Machikney'];

        const normalizedMessage = message.toLowerCase();

        let response;

        if (greetings.includes(normalizedMessage)) {
            response = "Hello sir/ma'am, how can I help you?";
        } else if (iamrojanGreetings.includes(normalizedMessage)) {
            response = "Oh I am sorry boss, I didn't recognize you. How are you?";
        } else if (aboutrojan.includes(normalizedMessage)) {
            response = "Rojan Parajuli is a normal guy, Born in 2003 Jan 26, Kathmandu, Nepal. Currently working as Designer and Province Incharge at Gaaubesi Logistics PVT. Ltd. He is also my creator.";
        } else if (aboutprayash.includes(normalizedMessage)) {
            response = "Mr. Praysh Rimal is a software engineer currently working at Gaaubesi Logistics PVT. LTD as a Senior Developer and IT head. He is from Bharatpur. He completed his graduation at East West Institute of Technology. He is a very talented person and is currently single. If anyone is interested, please feel free to contact him; he won't reject you. ";
        } else if (aboutaarya.includes(normalizedMessage)) {
            response = "Miss Aarya Poudel is a law student currently pursuing her bachelor's degree at Nepal Law Campus. She is very talented. During her school years, she used to top her class every year. If 'beauty with brain' was a real person, it would be Miss Aarya Poudel. Originally from Udayapur, Ghaighat, she currently resides in Radhe Radhe, Bhaktapur with her family.";
        } else if (aboutdeepak.includes(normalizedMessage)) {
            response = "Kukhura chor";
        } else if (aboutme.includes(normalizedMessage)) {
            response = "I am a chatbot, i am sorry ,i have many limitaions.I may say'I'm sorry, I don't understand that'for simple things as well." ;
        } else if (aboutroughwords.includes(normalizedMessage)) {
            response = "I'm sorry you're feeling frustrated or upset. If you want to talk about what's bothering you, I'm here to listen and try to help if I can. Remember to take a deep breath and try to find a constructive way to address whatever is bothering you.";
        } else {
            // Default response if no greeting is matched
            response = "I'm sorry, I don't understand that.";
        }

        simulateTyping(response);
    }

    function simulateTyping(message) {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'bot', 'typing');
        typingIndicator.innerText = 'Typing...';
        chatOutput.appendChild(typingIndicator);

        setTimeout(() => {
            typingIndicator.style.display = 'none';
            displayMessage(message, 'bot');
        }, 1000 + (Math.random() * 1000)); // Simulate typing duration
    }

    function displayMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        
        // Create icon element
        const iconElement = document.createElement('div');
        iconElement.classList.add(sender === 'user' ? 'user-icon' : 'bot-icon');
        iconElement.innerHTML = `<i class="${sender === 'user' ? 'fas fa-user' : 'fas fa-robot'}"></i>`;
        messageElement.appendChild(iconElement);

        // Create message content element
        const messageContentElement = document.createElement('div');
        messageContentElement.classList.add('message-content');
        messageContentElement.innerText = message;
        messageElement.appendChild(messageContentElement);

        chatOutput.appendChild(messageElement);

        // Scroll to the bottom of the chat output
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }
});
