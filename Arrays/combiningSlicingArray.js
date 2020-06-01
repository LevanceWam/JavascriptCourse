// combining and slicing arrays 
// lets combine 2 arrays together

// concat
// we use the concat method to combine them
// this will give us a brand new array leaving the other arrays the same
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

// slice
// we use slice to seperate an array into 2 halves
// there are multiple ways to use the method
// one way is to pass a zero based index
const sliced = combined.slice(2, 4);
console.log(sliced); // this will give us 3 & 4
// these 2 numbers are between the indexes of 2 and 4

// by filling in the first parameter only 
// it will return a array with the couple of index missing
const sliced2 = combined.slice(2); // the first 2 index will not be here
const sliced3 = combined.slice(); // this will give us a copy of the array

// one thing to understand about these methods
// if we are using them with primitive values
// the primitives will be copied into the targeted array

// But, If we have objects in the array
// the objects are not copied they are references are copied
// so the elements in the input and the ouputs will point to the same array

const third = [{
    id: 1
}];
const fourth = [4, 5, 6];
// when we call the concat method here the the obj is not copied itself
// only its reference is 
// so if we do this 

const combinee = third.concat(fourth);
third[0].id = 10;
console.log(combinee); // 1 will now be 10
// so because we are dealing with a reference type we are only copying it 
// from the reference
// this also applies to the slice.