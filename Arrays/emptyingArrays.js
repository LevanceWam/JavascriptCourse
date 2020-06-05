// lets work on emptying arrays 
let numbers = [1, 2, 3, 4, 5];
let numbers2 = numbers;
let numbers3 = numbers2;
let numbers4 = numbers2;
let numbers5 = numbers;
let numbers6 = numbers;


// solution 1 
// because we had this set to const we have to change it to let
// in order for this way to work.
numbers = []; // this is one way to empty the array
console.log('this is the first array', numbers); // the array is now empty
console.log('this is the second array referencing the the first', numbers2); // the array still has elements
// this does not target any refernces to made to the array

// solution 2 
numbers2.length = 0; // this will truncate the array
// it will remove all the elements
// so any other variable referencing the array will be empty also
console.log(numbers2)
console.log(numbers3)
console.log(numbers4)

// solution 3 
numbers5.splice(0, numbers5.length);
// using splice we start from the beginning
// then place the length of the array to delete the rest of the elements

// solution 4
// using the pop method we can delete the last element in the array
// putting it inside of a loop we can delete the elements by looking at the length 
// till it reaches 0
while (numbers6.length > 0)
    numbers6.pop();
// not the best idea for big arrays with a lot of elements
// because this can slow down performance 