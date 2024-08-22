document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message`;
        const messageP = document.createElement('p');
        messageP.textContent = content;
        messageDiv.appendChild(messageP);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        if (lowerCaseMessage.includes('salam')) {
            return 'Salam! Necəsiniz?';
        } else if (lowerCaseMessage.includes('necə')) {
            return 'Mən yaxşıyam, təşəkkür edirəm!';
        } else if (lowerCaseMessage.includes('sağ ol')) {
            return 'Rica edirəm!';
        } else {
            return 'Bağışlayın, sizə kömək edə bilmirəm.';
        }
    }

    sendButton.addEventListener('click', () => {
        const userText = userInput.value.trim();
        if (userText) {
            addMessage(userText, 'user');
            userInput.value = '';
            const botResponse = getBotResponse(userText);
            setTimeout(() => {
                addMessage(botResponse, 'bot');
            }, 500);
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendButton.click();
        }
    });
});