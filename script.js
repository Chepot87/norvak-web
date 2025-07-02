// script.js

window.addEventListener('load', () => {
  const text = "WELCOME!";
  const el = document.getElementById('welcome-text');
  let idx = 0;

  function type() {
    if (idx < text.length) {
      el.textContent += text[idx++];
      setTimeout(type, 150);
    } else {
      el.style.borderRight = 'none';
      setTimeout(() => {
        document.getElementById('splash').classList.add('hide');
      }, 1000);
    }
  }

  type();
});

// CHAT WIDGET
const chatBtn   = document.getElementById('chat-button');
const chatModal = document.getElementById('chat-modal');
const chatClose = document.getElementById('chat-close');
const chatForm  = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMsgs  = document.getElementById('chat-messages');

// Open & close
chatBtn.addEventListener('click', () => {
  chatModal.classList.toggle('open');
  chatInput.focus();
});
chatClose.addEventListener('click', () => {
  chatModal.classList.remove('open');
});

// Handle “sending” a message
chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  // Append user message
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.textContent = text;
  chatMsgs.appendChild(userMsg);

  chatInput.value = '';
  chatMsgs.scrollTop = chatMsgs.scrollHeight;

// Simulate bot reply
setTimeout(() => {
  const botMsg = document.createElement('div');
  botMsg.className = 'message bot';
  botMsg.innerHTML = getBotReply(text); // innerHTML allows GIFs too
  chatMsgs.appendChild(botMsg);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}, 600);

// Basic chatbot logic
function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes('hello') || msg.includes('hi')) {
    return `Hey! 👋 You just made my day 2% better. how can I help you?<br><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXhkbWJzeTE5bHo3OW9jaDd5eWwzY3BhYXZkazdtc3NsdDNubWY5byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/28GHfhGFWpFgsQB4wR/giphy.gif" width="100">`;
  } else if (msg.includes('available') || msg.includes('time')) {
    return "We're available 24/7... <br> But emotionally? Always tired. 😅";
  } else if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')|| msg.includes('website')) {
    return `Prices? Let’s just say we’re cheaper than therapy and twice as helpful 😄. Send us a message in our page for pricing<br><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZwOHRoZm9xd2FvbnBmdDE4aDloaXVtcjNwNjl1dW55NDNiNHY2cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VhWVAa7rUtT3xKX6Cd/giphy.gif" width="100">`;
  } else if (msg.includes('help') || msg.includes('support')) {
    return "I'm here to help! Unless it's with math... then we're both doomed. 😅<br>Im here, how can I help?";
  } else if (msg.includes('thanks') || msg.includes('thank you')) {
    return `You're welcome! 😊<br><img src="https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif" width="100">`;
  } else if (msg.includes('joke')) {
    return `Why don’t programmers like nature?<br>It has too many bugs 🐛<br><img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTNwdmRmdGhhOGs3dHl6eXF3MTUxOGYxeTYzMm91eDc0cWp0ZGdteCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8mJT8sQxpaQdKubpOi/giphy.gif" width="100">`;
  } else {
    const fallbackReplies = [
      `I'm not sure what that means... but I'm nodding anyway. 🤖<br><img src="https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif" width="100">`,
      `Please hold while I Google that...<br><img src="https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif" width="100">`,
      `That’s above my pay grade. But here’s a dancing robot.<br><img src="https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif" width="100">`
    ];
    return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
  }
}



});


