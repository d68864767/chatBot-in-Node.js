// Importing required modules
const dotenv = require('dotenv');
const chatBot = require('./chatBot');

// Configuring dotenv to use .env file
dotenv.config();

// Sample conversation
let conversation = ["User: Hello", "Bot: Hi, how can I help?", "User: What's the weather?", "User: It's sunny", "User: What's the weather?"];

// Calling chatBot function with the conversation
let botResponses = chatBot(conversation);

// Printing bot responses
botResponses.forEach(response => {
    console.log("Bot: " + response);
});
