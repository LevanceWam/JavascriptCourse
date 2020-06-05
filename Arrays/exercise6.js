// Part 1
// create a function called get max
// this function will take an array
//  and return the largest number

const numbers = [5, 1, 7, 2, 4, 6];
// my Attempts
function getMax(array) {
    if (array.length === 0) return;
    let value = 0;
    for (let element of array) {
        if (element > value)
            value = element;
    }
    return value;
}
const max = getMax(numbers);
console.log(max);

// part 2 
// recreate the function above with reduce method;
function maximum(array) {
    if (array.length === 0)
        return;
    return array.reduce((accumulator, current) => {
        if (current > accumulator) accumulator = current;
        return accumulator;
    })
}

const maxed = maximum(numbers);
console.log(maxed);