const readline = require('readline');

// Clear the terminal before playing
console.clear();

// Set up readline to listen for keypress events
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

console.log("Welcome to mixed messages.");
console.log("A program to generate random sentences.")
console.log("To exit the program at any time, simply hit the enter key.");
console.log("\nPress Space to generate a message, or Enter to exit.");

process.stdin.on('keypress', (str, key) => {
    if (key.name === 'space') {
        console.log("🎲 Random message will appear here!"); // Placeholder for actual messages
    } else if (key.name === 'return') {
        console.log("Goodbye!");
        process.exit();
    }
});