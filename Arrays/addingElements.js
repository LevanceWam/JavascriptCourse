// const does not stop us from modifying the content of an array
// what the const does is it stops us from assigning numbers to something esle
// like setting numbers to an empty array will give us an error
//  numbers = []; -> error
const numbers = [3, 4];

// lets look at 3 methods to add to the 
// End
// we can add 1 or more agruments and they will be added to the end of the array 
// with the .push method
numbers.push(5, 6);
// Beginning 
// if we want to add to the beginning of the array we use the .unshift method
// this basically pushes the elements in the array to the right
// and adds the new elements to the beginning
numbers.unshift(1, 2);
// Middle 
// to add elements anywhere in the array we use the .splice method
// this is how we read the parameters to add the correct agruments
// first agrument is the placement where will we be inserting the new elements
// second argument is how many elements after the index we choose do we want to delete
// finally what are we going to put in 
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);