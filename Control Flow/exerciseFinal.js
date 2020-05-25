// create a function that returns prime numbers
function primeNum(limit) {
    // we start by declaring a for loop from 2 to our limit.
    // we start at 2 because 1 is not a prime
    for (let num = 2; num <= limit; num++) {
        // here we want to set a variable of true so when we come across a prime we 
        // say it is true
        let isPrime = true;
        for (let i = 2; i < num; i++) {
            // in this for loop we will use the numbers here to factor against the 
            // numbers in the for loop above.
            // we already know that any number divided by one equals itself so we skip one.
            // now we are dividing from 2 and up
            if (num % i === 0) {
                // using modulus if the number reaches zero then it will be labeled false
                // we break from the current iteration and move on to the next one
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(num);
    }
}

primeNum(10);

// cleaner version
// I learned that nested for loops can get a little tricky and 
// a good way to deal with them is to seperate them into functions
// this makes them easier to read and makes your code look less busy.

function primeNums(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number)) console.log(number);
    }
}

function isPrimes(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
            return false;
        }
    }
    return true;
}

primeNums(20);