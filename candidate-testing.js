const readlineSync = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = readlineSync.question('What is your name?');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //console.log(question); 
  //candidateAnswer = prompt("")
  for (let i = 0; i < questions.length; i++) { //iterate over each question
    let candidateAnswer = readlineSync.question(questions[i]); // prompt user with current ?
    candidateAnswers.push(candidateAnswer); // store  in candidateAnswers
  }
}

function gradeQuiz(candidateAnswers) {
let correctCount = 0; //keep track of amount of right answer
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  // if (candidateAnswer === correctAnswer) {
  //console.log("That is correct!");
  // } else {
  //console.log("Nope! Try again.");
  // }
  for (let i = 0; i < questions.length; i++) { //iterate over every question
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correctCount++; //check for equality between can answer & correct answer, convert to same format
      console.log(`Question ${i + 1}: is right`); // +1 so we start from 1
    } else {
      console.log(`Question ${i + 1}: is wrong. The right answer is ${correctAnswers[i]}`);
    }
  }
  let score = (correctCount / questions.length) * 100; // divide num of right answers by num of questions, * by 100

  let grade;
  if (score >= 80) {
    grade = "PASS";
  } else {
    grade = "FAIL";
  }

  console.log(`\nCandidate's Score: ${score.toFixed(2)}%`);
  console.log(`Result: ${grade}`);
  return score;
  //let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  //return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Greetings, ${candidateName}! Great to meet you.`);
  askQuestion();
  let score = gradeQuiz(candidateAnswers);
}
runProgram();
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};