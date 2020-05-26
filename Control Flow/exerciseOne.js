// write a function that takes 2 numbers and returns the maximum of the 2
let a = 25;
let b = 27;

function maxNum(x, y) {
    // i could have returned the values
    if (x > y) console.log(x);
    console.log(y);

    // try to turn it into a ternary.
    return (x > y) ? x : y;
}

maxNum(3, 3);
let number = maxNum(a, b);
console.log(number);