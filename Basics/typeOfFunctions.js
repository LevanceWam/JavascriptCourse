// This function is peforming a task
function indentity(firstname, lastname, age) {
    console.log('I am ' + firstname + ' ' + lastname + ' and I am ',
        age)
}

// This function is calculating a value
function square(number) {
    // let's calculate the square of the #
    // we need to return the value to who ever is calling the function
    return number * number
}

// this returns a value 
// we can use the value from square and put it in another variable
let numberSquared = square(5);
// we don't have to put the function in the variable to print it we just can.
console.log(numberSquared)