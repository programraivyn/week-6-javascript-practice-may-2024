let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.

  playerOne.strength = prompt("What is your best strength?");
  playerOne.goal = prompt("What is your ultimate goal?");


  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}?`;
  messageParagraph.innerHTML = `We need more pros with ${playerOne.strength} like you. How do you plan to achieve your goal of ${playerOne.goal}?`;
}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  
  customer.number = prompt("What is your phone number?");
  customer.bday = prompt("What is your date of birth?");

  
  // Try it!
  // TODO: add the answer to the new question to the innerHTML statement below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}.`;
  messageParagraph.innerHTML = `${customer.name}, you updated your profile! Your number is now saved as ${customer.number}.`;
  messageParagraph.innerHTML = `To confirm, ${customer.name}, we have updated your birthday to ${customer.bday}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};

  // Try it!
  // TODO: create a prompt to ask about a pet
  pet.type = prompt("What type of pet do you have?");
  pet.name = prompt("What is your pet's name?");
  pet.food = prompt("What is your pet's fave food or treat?");

  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `I'll bet your ${pet.type}, ${pet.name} is just the most adorable thing ever! They deserve all the ${pet.food} their heart desires.`;
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  let movie;
  movie = {};

  movie.genre = prompt("What's your favorite movie genre?");
  movie.alltime = prompt("What's your fave movie of ALL time?");
  movie.classic = prompt("What movie is a classic and must-have for you?");

  messageParagraph.innerHTML = `I like ${movie.genre} movies too, and I must admit ${movie.alltime} and ${movie.classic} are both great films.`
  
}

part4.onclick = day1Part4;