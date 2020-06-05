// create a function called move
// this function takes an array, index and offset
// we want to be able to move an element inside of
// a array by the number of the offset
// so [1,2,3,4] lets move 1 to the end 
// so offset woud be 3 
// end [2,3,4,1]
// if the offset is greater than the array then show error
// by Levance Wamley jr

const numbers = [1, 2, 3, 4];
// my Attempt
function move(array, index, offset) {
    if (offset > array.length || offset < 0) {
        console.error('Invalid offset');
        return;
    }
    const newArray = [...array];
    newArray.splice(index, 1);
    newArray.splice(offset, 0, array[index]);
    return newArray;
}

const output = move(numbers, 0, 1);
console.log(output);

// alternate way

function moved(array, index, offset) {
    const position = index + offset;
    if (position > array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }
    const arr = [...array];
    const element = arr.splice(index, 1)[0];
    // so when we splice an element
    // the splice method returns the elements
    // that was removed 
    // this means we can place the removed element in a variable
    // and use it somewhere else
    arr.splice(position, 0, element);
    return arr;
}

const output2 = moved(numbers, 0, 5);
console.log(output2);