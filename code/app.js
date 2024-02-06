const prompt = require("prompt-sync")();

console.log("Welcome to the Movie Quiz!");

let correctAnswers = 0;
const totalQuestions = 3

const answer1 = prompt("What movie won Best Picture at the 2015 Oscar's? ");
const correctAnswer1 = "BIRDMAN";

if (answer1.toUpperCase() === correctAnswer1) {;
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("*Incredibly loud incorrect buzzer sound*");
}

const answer2 = prompt("Who is the director of the 5th Mission Impossible movie? ");
const correctAnswer2 = "CHRIS MCQUARRIE";


if (answer2.toUpperCase() === correctAnswer2) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("*Incredibly loud incorrect buzzer sound*");
}

const answer3 = prompt("The best movie of all time? ");
const correctAnswer3 = "TROLL 2";

if (answer3.toUpperCase() === correctAnswer3) {
    console.log("Correct!... You must've cheated");
    correctAnswers++;
} else {
    console.log("*Incredibly loud incorrect buzzer sound* It's obviously Troll 2. English cast, Italian crew, what could go wrong???");
}


const percent = Math.round((correctAnswers / totalQuestions) * 100)

console.log("You got", correctAnswers, "questions correct" )
console.log("You scored", percent.toString() + "%")