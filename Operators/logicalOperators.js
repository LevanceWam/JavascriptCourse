// logical operators
// We use these operators to make decisions based on
// multiple conditons.
// In JS we have 3 logical operators: 
// and, or, and not.

// Logical AND &&
// Returns true if both operands are TRUE
// it doesn't matter what way we type it if one of the operand is false it will print as false
console.log(true && true); // comes out as true
console.log(true && false); // this will come out as false


// Logical OR
// Returns TRUE if one of the operands is TRUE
// as long as one of the operands comes out as true 
// the value of the expression will come out as true

let highIncome = fasle;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);

// NOT (!)
// this will print the opposite of eligibleFor loan
let applicationRefused = !eligibleForLoan;

console.log(applicationRefused)