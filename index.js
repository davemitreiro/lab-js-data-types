/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

const tongueTwister =
  s1 +
  " " +
  s2 +
  " " +
  s3 +
  " " +
  s4 +
  " " +
  s5 +
  " " +
  s3 +
  " " +
  s2 +
  " " +
  s1 +
  " " +
  s4;

// Print out the concatenated string

console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
function concatenateUpper(str) {
  let upper = str.substring(str.length - 1).toUpperCase();
  return str.slice(0, -1) + upper;
}
// Print the cameLtaiL-formatted string

const result = `${concatenateUpper(part1)}${concatenateUpper(part2)}`;

console.log(result);

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
let billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = billTotal * 0.15;
// Print out the tipAmount

console.log(`This is the amount of tip : ${tipAmount}`);
/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.random() * 10;
// Print the generated random number

console.log(Math.round(randomNumber));

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;

console.log(expression1); //Answer: False

const expression2 = a || b;

console.log(expression2); //Answer : True

const expression3 = !a && b;

console.log(expression3); //Answer: False

const expression4 = !(a && b);

console.log(expression4); //Answer: True

const expression5 = !a || !b;

console.log(expression5); //Answer: True

const expression6 = !(a || b);

console.log(expression6); // Answer: False

const expression7 = a && a;

console.log(expression7); //Answer: True
