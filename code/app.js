const prompt = require("prompt-sync")()

console.log("Welcome to the Movie Quiz!")

const answer1 = prompt("What movie won Best Picture at the 2015 Oscar's? ")
const correctAnswer1 = "Birdman"

if (answer1 === correctAnswer1) {
    console.log("Correct!")
}