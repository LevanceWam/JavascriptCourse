// create a fizz buzz function
// if the number is divisible by 3 print fizz
// if the number is divisible by 5 print buzz
// if the number is divisible by 3 and 5 print fizz buzz
// if not divisible by either number print the number
// if not a number print not a number

// my attempt
function fizzBuzz(input) {
    if (isNaN(input) || input === true || input === false) return 'Is not a number';
    if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    else if (input % 3 === 0) return 'Fizz';
    else if (input % 5 === 0) return 'Buzz';
    else return input;
}

const result = fizzBuzz(9);
console.log(result);

// Another way
// so this way used the typeof function to checks to see if any of the inputs is not a number
// this makes the code much shorter than my attempt and makes it much cleaner 
// also else if and else wasnt really needed
function fizzbuzz(input) {
    if (typeof input !== 'number') return NaN;
    if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz';
    if (input % 3 === 0) return 'Fizz';
    if (input % 5 === 0) return 'Buzz';
    return input;
}