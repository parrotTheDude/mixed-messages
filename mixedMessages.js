const readline = require('readline');

// Clear the terminal before playing
console.clear();

// Set up readline to listen for keypress events
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Create a set of random words to create sentences
const subjects = ["The cat", "A programmer", "My neighbor", "The astronaut", "A curious dog"];
const actions = ["jumps over", "writes code for", "bakes", "paints", "fixes"];
const objects = ["a giant cake.", "a new website.", "the morning newspaper.", "a mysterious door.", "a flying car."];

// Func takes an array and replies with a random word
function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function makeTheSentence() {
  return `${getRandomWord(subjects)} ${getRandomWord(actions)} ${getRandomWord(objects)}`;
}

console.log("Welcome to mixed messages.");
console.log("A program to generate random sentences.")
console.log("To exit the program at any time, simply hit the enter key.");
console.log("\nPress Space to generate a message, or Enter to exit.");

process.stdin.on('keypress', (str, key) => {
    if (key.name === 'space') {
    	console.log(makeTheSentence());
    } else if (key.name === 'return') {
      console.log("Goodbye!");
      process.exit();
    }
});