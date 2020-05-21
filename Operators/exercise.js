// let's write a program that will swap the values of variables
// I could have coded this a lot easier but I wanted to practice my functions
let a = 'red';
let b = 'blue';

console.log('a is currently: ' + a);
console.log('b is currently: ' + b);

function swappingColors(x, y) {
    // set a variable to hold x value so y can take it from there
    let temp = x;
    x = y;
    y = temp;

    console.log('a is currently: ' + x)
    console.log('b is currently: ' + y)
}

swappingColors(a, b);