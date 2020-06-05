// create a function that takes 2 arrays 
// in the second array we add values we want excluded 
// from the first array
// then we return a new array without the numbers from the origina,
// example [1,2,3,4,5,1] exclude [1]
// new array: [2,3,4,5]
// by Levance Wamley jr

const numbers = [1, 2, 3, 4, 5, 1];

function except(array, excluded) {
    newArray = [];
    for (let element of array) {
        if (!excluded.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
}

const output = except(numbers, [1, 2]);
console.log(output);