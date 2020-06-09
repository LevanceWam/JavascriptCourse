// function declaration
// one difference between function declartion and expression is that
// when we declare a function like the one below we 
// do not have to terminate it
function walk() {
    console.log('walk');
}

// in JS there is another way to delcare a function
// Function Expressions
// functions are objects
// make sure when you are done declaring the function you terminate the function with ;
// this is a anonymous function expression 
let run = function () {
    console.log('run')
};
// lets delcare another variable
let move = run;
// now both move and run are referencing the same anonymous function
// which is one object in memory so now we can call the anonymous function using other references
run();
move();

// we can give function expressions names
// this is referred to as 
// Named function expressions
let jog = function speedWalk() {
    console.log('not running or walking');
};
jog();