// routes/chatbotRoutes.js
const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

// POST route to handle user messages
router.post('/message', async (req, res) => {
  const userMessage = req.body.message;
  
  if (!userMessage) {
    return res.status(400).json({ message: 'Message cannot be empty' });
  }

  // Default bot response if no match found
  let botResponse = 'Sorry, I didn\'t understand that.';

  // Predefined responses
  const predefinedReplies = {
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! How can I help you?",
    "bye": "Goodbye! Have a great day!",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what's your name": "I'm BotBuddy, your assistant!",
    "who created you": "I was created by a team of talented developers!",
    "what is your purpose": "I'm here to help you with your queries.",
    "thank you": "You're welcome! Glad I could help.",
    "thanks": "No problem! Happy to assist.",
    "what can you do": "I can assist you with various queries, help you with information, and keep a conversation going!",
    "help": "How can I assist you? Feel free to ask any questions.",
    "what's the weather": "I can't check live weather updates at the moment, but you can try a weather app!",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "what is love": "Love is a complex emotion that means different things to different people!"
  };

  // Check if the message has a predefined response
  for (const key in predefinedReplies) {
    if (userMessage.toLowerCase().includes(key)) {
      botResponse = predefinedReplies[key];
      break;
    }
  }

  // Save conversation in MongoDB
  const chat = new Chat({
    userMessage,
    botResponse
  });
  await chat.save();

  // Send the bot's response back to the client
  res.json({ message: botResponse });
});

module.exports = router;
