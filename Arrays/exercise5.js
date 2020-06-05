// part 1
// create a function called countOccurrences
// this function takes an array and a search element
// and returns the number of times the search element has been found
// in the array
// by Levance Wamley jr

const numbers = [1, 2, 2, 2, 2, 3, 4, 5, 1];
// my Attempts
function countOccurrences(array, searchElement) {
    let count = 0;
    for (let element of array)
        if (element === searchElement) count++;
    return count;
}

const count = countOccurrences(numbers, 2);
console.log(count);

// part 2 
// using the reduce method 
// try to recreate the function above

function countOccurrance(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        if (currentValue === searchElement) accumulator++;
        return accumulator;
    }, 0);
}

const count2 = countOccurrance(numbers, 1);
console.log(count2);

// const result = numbers.reduce((accumulator, currentValue) => {
//     if (currentValue === searchElement) accumulator++;
//     return accumulator;
// }, 0);
// I converted this to the code above