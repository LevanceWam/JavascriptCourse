// create a function that works like the include method 
// it should be able to tell if an element is in an array
// the function should take 2 parameters
// the array and the element we are looking for
// if it is found return true
// if not return false
// by Levance Wamley jr

const numbers = [1, 2, 3, 4];

// my attempt
function included(array, element) {
    return array.indexOf(element) !== -1;
}
console.log(included(numbers, 3));

// an alternative
function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

console.log(includes(numbers, 5));