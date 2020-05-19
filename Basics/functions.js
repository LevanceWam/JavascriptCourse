// Functions are one of the fundamental building blocks of blocks in javascript.
// A set of statements that performs a task or calculates a value.

function greet() { // this is how we define a function.
    // this is the body of the function
    // this is where we add all of the statements to define the logic in our application
    console.log('Hello world')
} // We do not need a semi-colon at the end becasue we are not declaring it like a variable.

greet(); // this is how we call a function
// Functions can have inputs and the inputs affect how the function behaves

// let's make a new one to say a person's name
function greeting(name) {
    // In the parenthesis we add a variable we call a parameter
    // this variable is only useful in side of this function (local variable)
    // We can not use this variable outside of the function.
    console.log('Hey' + name)
}

greeting('Tony'); // we pass the value of tony in the variable
// we refer to this as a argument
// So 'Tony' is the agrument to the function and 'name' is the parameter
// A parameter id what we have at the time of declaration
// while  an argument is the value we pass into the parameter.

// we can reuse this function with a new input
greeting('Sandy');

// functions are allowed to have multiple parameters
// So let's make a new function to do that

function indentity(firstname, lastname, age) {
    // we seperate parameters by adding ','
    console.log('I am ' + firstname + lastname + ' and I am ',
        age)
}

indentity('jack', 'cactus', '5')
// If we dont fill in all the parameters with a agrument it will print undefined in the console.