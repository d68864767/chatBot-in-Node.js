// Importing required module
const memory = require('./memory');

// Function to generate chatBot responses
function chatBot(conversation) {
    let botResponses = [];
    let previousQuestion = null;

    for (let i = 0; i < conversation.length; i++) {
        let message = conversation[i];

        if (message.startsWith("User: ")) {
            message = message.substring(6);

            if (message.endsWith("?")) {
                if (memory.has(message)) {
                    botResponses.push(memory.get(message));
                } else {
                    botResponses.push("I don't know. Can you tell me?");
                    previousQuestion = message;
                }
            } else if (previousQuestion) {
                memory.set(previousQuestion, message);
                previousQuestion = null;
            }
        }
    }

    return botResponses;
}

module.exports = chatBot;
