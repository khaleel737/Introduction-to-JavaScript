/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS INSIDE OF A FUNCTION (tasks 1d through task 7), IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

// task 1a, 1b, and 1c are not autograded

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/

let age = 18;

console.log(age >= 18);


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/

let income = 50000;

let tax = 0.15;

income >= 1 && income <= 50000 ? tax = 0.15 : tax = 0.20;

/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

let year = "1999";

console.log(Number(year));


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(num1, num2){
  /*add your code here*/
  return num1 * num2;
}
console.log(multiply(4, 5));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
 1. Invoke the dogYears function below and pass an age value to it
 2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
 3. Return the newly calculated age
*/

function dogYears(age){
  /*add your code here*/
  return age * 7;
}
console.log(dogYears(5));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
1. Invoke the hungryDog function below and pass it a weight value in pounds
2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day

REMEMBER: This program should handle correctly adult AND puppy ages and weights

Feeding Requirements:

Adult Dogs 1 year and older 
   up to 5 lbs - 5% of their body weight
   6 - 10 lbs - 4% of their body weight 
   11 - 15 lbs - 3% of their body weight 
   > 15lbs - 2% of their body weight 

Puppies less than 1 year
   2 - 4 months 10% of their body weight
   4 - 7 months 5% of their body weight 
   7 - 12 months 4% of their body weight
  
NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(weight, age){
  /*add your code here*/
  if (age >= 1 && weight <= 5) {
    return weight * 0.05;
  } else if (age >=  1 && weight >= 6 && weight <= 10) {
    return weight * 0.04;
  } else if (age >= 1 && weight >= 11 && weight <=15) {
    return weight * 0.03;
  } else if (age >= 1 && weight > 15) {
    return weight * 0.02;
  } else if (age < 1 && age >= 0.583) {
    return weight * 0.04;
  } else if (age < 0.583 && age >= 0.333) {
    return weight * 0.05;
  } else if (age < 0.333 && age >= 0.166) {
    return weight * 0.10;
  }
}
console.log(hungryDog(4, 0.59));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
1. Receive 2 parameters the user's choice and the computer's choice
2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
 - win should return "you win!"
 - lose should return "you lose!"
 - tie should return "it's a tie"

RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie

HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

let computer = Math.random();
// // let user = Math.floor(Math.random() * 3);
// if (computer <= 0.333) {
//   computer ='rock';
//  } else if (computer <= 0.66){
//    computer = 'Paper';
//  } else {
//     computer = 'scissors';
//  }

function game(user, computer){
        
   let scissors = 0;
   let rock = 1;
   let paper = 2;

   if (user === 'scissors' && computer === 'paper') {
     return 'you win!';
      } else if (user === 'rock' && computer === 'paper'){
        return 'you lose!';
    } else if (user === 'paper' && computer === 'rock') {
      return 'you win!';
    } else if (user === 'scissors' && computer === 'rock') {
      return 'you lose!'; 
    } else if (user === 'rock' && computer === 'scissors') {
      return 'you win!';
    } else if (user === 'paper' && computer === 'scissors') {
      return 'you lose!';
    } else if (user === computer) {
      return "it's a tie";
    }
  }
  // console.log(game(2, 1));
  // console.log(game(1, computer));

// let computer = Math.random();

//   if(computer <= .333)
//   computer = "scissors"
//   else if(computer <=.66)
//   computer = "rock"
//   else computer = "Paper"


// function game(user, computer){
//   if(user === "rock" && computer === "paper"){
//     return "you lose!"
//   } else if(user === "paper" && computer === "scissors"){
//     return "you lose!"
//   } else if(user === "scissors" && computer === "rock"){
//     return "you lose!"
//   } else if(user === "rock" && computer === "scissors"){
//     return "you win!"
//   } else if(user === "paper" && computer === "rock"){
//     return "you win!"
//   } else if(user === "scissors" && computer === "paper"){
//     return "you win!"
//   } else if(user === computer){
//     return "it's a tie"
//   }
// }

      //   if (user === 0 && computer === 2) {
      //   return "you win!";
      //    } else if (computer === 0 && user === 2){
      //      return "you lose!";
      //  } else if (user === 2 && computer === 1) {
      //    return 'you win!';
      //  } else if (computer === 2 && user === 1) {
      //    return 'you lose!'; 
      //  } else if (user === 1 && computer === 0) {
      //    return "you win!";
      //  } else if (computer === 1 && user === 0) {
      //    return "you lose!";
      //  } else if (computer === user) {
      //    return "it's a tie";
      //  }

// function game(user, computer){
//   /*add your code here*/

// let userChoice = Math.random();
// let computerChoice = Math.random();

// //   if (userChoice < computerChoice)

// if (computer <= 0.33) {
//  computer ='Rock';
// } else if (computerChoice <= 0.66){
//   computerChoice === 'Paper';
// } else {
//   return computer === 'scissors';
// }
 
//   if (userChoice === 'Scissors' && computerChoice === 'Paper') {
//  return 'you win!';
//   } else if (computerChoice === 'Scissors' && userChoice === 'Paper'){
//     return 'you lose!';
// } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
//   return 'you win!';
// } else if (computerChoice === 'Paper' && userChoice === 'Rock') {
//   return 'you lose!'; 
// } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
//   return 'you win!';
// } else if (computerChoice === 'Rock' && userChoice === 'Scissors') {
//   return 'you lose!';
// } else if (computerChoice === userChoice) {
//   return "it's a tie!";
// }


// let user = Math.floor(Math.random() * 3);
// let computer = Math.floor(Math.random() * 3);

// function game(user, computer){
//   /*add your code here*/
//   if (computer <= 0.33) {
//     computer = 'Rock';
//    } else if (computer > 0.33 && computer <= 0.66){
//      computer ='Paper';
//    } else if (computer > 0.66 && computer <= 1) {
//      computer ='Scissors'
//    } else if (user <= 0.33) {
//      user = 'Rock';
//     } else if (user > 0.33 && user <= 0.66){
//      user = 'Paper';
//    } else  if (user > 0.66 && user <= 1) {
//      user = 'Scissors'
//    }
   
// if (user === 'Scissors' && computer === 'Paper') {
//     return 'you win!';
//      } else if (computer === 'Scissors' && user === 'Paper'){
//        return 'you lose!';
//    } else if (user === 'Paper' && computer === 'Rock') {
//      return 'you win!';
//    } else if (computer === 'Paper' && user === 'Rock') {
//      return 'you lose!'; 
//    } else if (user === 'Rock' && computer === 'Scissors') {
//      return 'you win!';
//    } else if (computer === 'Rock' && user === 'Scissors') {
//      return 'you lose!';
//    } else if (computer === 'Rock' && user === 'Rock') {
//      return "it's a tie!";
//    } else if (computer === 'Paper' && user === 'Paper') {
//     return "it's a tie!";
//   } else if (computer === 'Scissors' && user === 'Scissors') {
//     return "it's a tie!";
//   }
// }
//   console.log(game(0.3, 0.4));

// let userChoice = Math.random();
// let computerChoice = Math.random();

//   if (userChoice < computerChoice)

// if (computerChoice <= 0.33) {
//  computerChoice === 'Rock';
// } else if (computerChoice > 0.33 && computerChoice <= 0.66){
//   computerChoice === 'Paper';
// } else if (computerChoice > 0.66 && computerChoice <= 1) {
//   computerChoice === 'Scissors'
// } else if (user <= 0.33) {
//   computerChoice === 'Rock';
//  } else if (userChoice > 0.33 && userChoice <= 0.66){
//   userChoice === 'Paper';
// } else  if (userChoice > 0.66 && userChoice <= 1) {
//   computer === 'Scissors'
// } else {

// }
 
//   if (computerChoice > userChoice) {
//  return 'you win!';
// } else if (computerChoice <  userChoice) {
//     return 'you lose!';
// } else if (computerChoice === userChoice) {
//     return "it's a tie"
//   }

  // return userChoice + computerChoice;

// console.log(game());




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
1. Receive a number of kilometers
2. Convert the number of kiolmeters received to miles
3. Return the number of miles
*/

function miles(mile){
  /*add your code here*/
  let convert = 0.621371;

  return mile * convert;
}
console.log(miles(10));


//Task 5b - Feet to CM
/*
Using the feet function below do the following:
1. Receive a number of cm
2. Convert the number of cm to feet
3. Return number of feet
*/

function feet(centi){
  let feets = 30.48;
  return centi / feets;
}
console.log(feet(10));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
1. Receive a starting number and start the count down from the number received 
2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
    "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall"
*/


function annoyingSong(sing){
  /*add your code here*/

  for(let i = sing; i > 0; i--) {
    return `${[i]} bottles of soda on the wall, ${[i]} bottles of soda, take one down pass it around ${[i - 1]} bottles of soda on the wall`;
  }
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
1. Receive a score out of 100 
2. Return the corresponding letter grade following this grade scale:

 90-100 should return 'you got an A' 
 80-89 should return 'you got a B'
 70-79 should return 'you got a C'
 60-69 should return 'you got a D'
 below should return 'you got an F'
*/

function grade(grade){
/*Your Code here */
if (grade <= 100 && grade >= 90){
return 'you got an A';
} else if (grade <= 89 && grade >= 80) {
  return 'you got a B';
} else if (grade >= 70 && grade <= 79) {
  return 'you got a C';
} else if (grade >=60 && grade <= 69) {
  return 'you got a D';
} else {
  return 'you got an F';
}
}


/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
1. Receive a string as a parameter
2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

HINT - you may need to study tomorrow's content on arrays 
HINT - try looking up the .includes() method
*/


function vowelCounter() {
const vowels = ['a', 'B', 'c', 'd', 'e', 'f', 'G'];

return vowels.includes();
}
console.log(vowelCounter)



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
module.exports = {
  foo,
  multiply,
  dogYears,
  hungryDog,
  game,
  miles,
  feet,
  annoyingSong,
  grade
}


  // if (computer <= 0.33) {
  //   computer === 'Rock';
  //  } else if (computer > 0.33 && computer <= 0.66){
  //    computer === 'Paper';
  //  } else if (computer > 0.66 && computer <= 1) {
  //    computer === 'Scissors'
  //  } else if (user <= 0.33) {
  //    computer === 'Rock';
  //   } else if (user > 0.33 && user <= 0.66){
  //    user === 'Paper';
  //  } else  if (user > 0.66 && user <= 1) {
  //    user === 'Scissors'
  //  } else {
  //  }