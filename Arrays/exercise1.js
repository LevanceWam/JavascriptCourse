// create a function that takes 2 parameters 
// with those 2 parameters it will create a range from 
// one number to another in a array
// example (1,5) = [1,2,3,4,5]
// by Levance Wamley jr

// my Attempt
function arrayFromRange(min, max) {
    let list = [];
    for (let i = min; i <= max; i++) {
        list.push(min);
        min++;
    };
    return list;
}

const numbers = arrayFromRange(-10, -4);

console.log(numbers);