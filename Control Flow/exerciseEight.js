// create a function that takes a limit and from 0 to the limit add
// all of the multiples of 3 and 5 and get the sum
//example 0 - 15 we would add 3,5,6,9,10,12,15 

// My Attempt
// my issue that I was having was that I was returning the total inside the for loop
// When it should have been on the outside.
function sum(limit) {
    let total = 0;
    for (let i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) total += i;
    }
    return total;
}

console.log(sum(10));