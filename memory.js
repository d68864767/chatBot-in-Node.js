// Creating a Map to store the questions and answers
let memory = new Map();

// Function to check if a question is in memory
function has(question) {
    return memory.has(question);
}

// Function to get an answer from memory
function get(question) {
    return memory.get(question);
}

// Function to set a question and answer in memory
function set(question, answer) {
    memory.set(question, answer);
}

module.exports = {
    has,
    get,
    set
};
