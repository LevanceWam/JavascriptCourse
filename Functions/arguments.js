// Arguments
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2, 3, 4, 5)); // this will only add the first 2 arguments

// let's look at a way to be able to add all the arguments we want and get the sum
// every function in JS has a special obj called arguments

function result() {
    console.log(arguments); //this returns an obj of the agruments
    // on the console it'll look like an array but this is for certian a obj
    // let's try to get the sum of all of the arguments 
    let total = 0;
    for (let value of arguments) total += value;
    return total;
    // note that we can get rid of the parameters 
}
console.log(result(1, 2, 3, 4, 5));