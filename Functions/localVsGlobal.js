// scope
const message = 'hi';
console.log(message);

// let's try it in a code block
function start() {
    const text = 'hey';
    const color = 'blue';
    console.log(color);
    // return text;
}
// console.log(text); // this returns as undefined
console.log(start()); // now it will return text

// this is do to scope
// the scope of a variable or a constant determines 
// where that variable or const is accessible 
// when we declare a variable with const or let 
// the scope of that variable is limited to the block 
// in which they are defined
// we can not access the variable inside of the function 
// outside of the function block
// this is also true for if statements
// also for (for loops)

// now watch this 
// we can have two variables with the same name and in different functions
// this is ok because these variables are local/accessible to the functions they were defined in
function stop() {
    const text = 'bye';
    console.log(color);
}

// lets define a function outside of the function
// this constant has global scope
// this means that this constant is accessible everywhere
const color = 'red'
stop();
start();
// now if we go back and declare another color inside of the function
// the constant local to the variable will show
// local variable or constants in a function have precedence over
// global variables or constants

// note:
// We want to avoid defining variables or constants this is consider bad pratice
// remember tooth brush metaphor everyone doesn't want to share the same toothbrush
// we want to make sure that we try to avoid define global variables
// because they are accesible everywhere and a function can accidently 
// change the value and lead to all kinds of bugs or issues