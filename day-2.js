let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

// Example
function day2Part1() {
  let wallet;
  let walletNumber;
  let coffeeNumber = 3.99;

  // 1. ask the user for data
  wallet = prompt("How much is in your wallet?");
  // 2. convert the answer to a number
  walletNumber = Number(wallet);

  // 3. use a math expression with the > operator to say if the statements is true or false.
  messageParagraph.innerHTML = `Coffee costs ${coffeeNumber}. You have ${walletNumber}. You can afford coffee: ${walletNumber > coffeeNumber}`
  
}

part1.onclick = day2Part1;


function day2Part2() {
  let bank;
  let bankNumber;
  let carNumber = 5000;

  
  // TODO: Prompt the user for how much in in their bank account. Convert it to a number.
  // 1. Ask the user for data
  bank = prompt("What is the available balance of your bank account right now?");
  // 2. convert it to a number
  bankNumber = Number(bank);

  // 3. use a math expression with the > operator to say if the statements is true or false.
  messageParagraph.innerHTML = `The car costs $${carNumber}. You have ${bankNumber} in your bank. You can afford the car: ${bankNumber > carNumber}`
  
  
}
part2.onclick = day2Part2;


function day2Part3() {
  let wallet;
  let walletNumber;
  let tvNumber = 300;

  // Try it!
  // TODO: Prompt the user for how much in in their wallet. Convert it to a number, and tell them true or false if they can buy a TV.

  // 1. Ask the user for data
  wallet = prompt("How much do you have in your wallet?");
  // 2. convert it to a number
  walletNumber = Number(wallet);

  // 3. use a math expression with the > operator to say if the statements is true or false.

  messageParagraph.innerHTML = `The price of the TV you selected is $${tvNumber}; you have $${walletNumber} on hand. You can afford the TV: ${walletNumber > tvNumber}.`;
}
part3.onclick = day2Part3;


function day2Part4() {
  let bank;
  let bankNumber;
  let rocketNumber = 10000000.99;

  // Try it!
  // TODO: Prompt the user for how much in in their bank account. Convert it to a number, and tell them true or false if they can buy a rocket.
  // 1. Ask the user for data
  bank = prompt("What is your current balance in your bank account?");
  // 2. convert it to a number
  bankNumber = Number(bank);

  // 3. use a math expression with the > operator to say if the statements is true or false.

  messageParagraph.innerHTML = `The price of this particular rocket in your cart is $${rocketNumber}; you currently have $${bankNumber} available. Can you afford the rocket? Result: ${bankNumber > rocketNumber}`;
}
part4.onclick = day2Part4;
