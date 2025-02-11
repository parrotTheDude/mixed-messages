const readline = require('readline');

// Clear the terminal before playing
console.clear();

// Set up readline to listen for keypress events
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Create a set of random words to create sentences
const subjects = [
    "The cat", "A programmer", "My neighbor", "The astronaut", "A curious dog",
    "The scientist", "A musician", "The wizard", "An old man", "A young girl",
    "The teacher", "A detective", "The chef", "A superhero", "The alien"
];

const actions = [
    "jumps over", "writes code for", "bakes", "paints", "fixes",
    "discovers", "runs away from", "investigates", "sings about", "creates",
    "imagines", "designs", "finds", "dances with", "transforms"
];

const objects = [
    "a giant cake.", "a new website.", "the morning newspaper.", "a mysterious door.", "a flying car.",
    "a lost treasure.", "a magical spell.", "an ancient book.", "a futuristic city.", "a talking parrot.",
    "a hidden message.", "a forgotten melody.", "a secret passage.", "a floating island.", "a glowing crystal."
];

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