function randomNumber(lower: number, upper: number): number {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

const MIN = 1;
const MAX = 1000;
const number = randomNumber(MIN, MAX);
let guess = 0;
let tries = 0;

do {
  guess = Number.parseInt(
    prompt(`Guess the number between ${MIN} and ${MAX}:`) || "0"
  );
  tries++;
  if (guess > number) {
    console.log("too high");
  } else if (guess < number) {
    console.log("too low");
  } else {
    console.log("correct");
  }
} while (guess != number);

console.log(`You guessed the secret number after ${tries} tries.`);
