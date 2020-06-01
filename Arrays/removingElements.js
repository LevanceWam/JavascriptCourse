// Let's remove some elements from a array

const numbers = [1, 2, 4, 5, 6, 7, 8, 89, 9];

// we can remove elements from the
// End
const last = numbers.pop(); // this removes the last element in the array
console.log(last);

// Beginning
const first = numbers.shift(); // this will return the first element removing it from the array
console.log(first);

// Middle
numbers.splice(2, 2); // we use splice to remove some elements
// for the first parameter we are picking the index we start at 
// With the second we decide how many elements we remove from the start point we chose
console.log(numbers);

// so to recap:
// we use the pop method to remove the last element
// we use the shift method to remove the first element
// finally we use the splice method to remove an element somewhere in the middle of the array