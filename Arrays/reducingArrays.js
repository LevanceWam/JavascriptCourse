// lets try to figure out the sum of all the numbers in the array
// similar to calculating the total cost of items in a shopping cart
const numbers = [1, -1, 2, 3, 4];

// Here is a simple algrothm to calculate it 
let sum = 0;

// next we will loop over the array
// we will get each element for each number and add it to the sum
for (let n of numbers) {
    sum += n;
}
console.log(sum);

// let's try using the reduce method
// with reduce() we can take all the elements in the array and
// reduce them into a single value
// can also be 
// string
// object
// anything

// for this we want to get a single value
// this method takes a callback function with 2 parameters
// the accumulator parameter we have here is exactly like the sum above
// its something we initialize
// the callback function is executed multiple times
// each time the currentValue will be set to one element
// our main job will be to get the currentValue and add it to the accumulator
// so first we return sum of accumulator + currentValue;
// now the result will be stored in the accumulator
// now we need to initalize the accumulator to 0
// we do that by passing 0 in the second argument
// the first argument was the callback and now 
// with the second we passed 0
const result = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(result);
// lets break it down to see what is going on behind the scenes
// so intially we set accumulator to 0 so in the first round this is what happened
// a = 0, c = 1 (We add them together) => a = 1 
// a = 1, c = -1 (We add them together) => a = 0 
// a = 0, c = 2 (We add them together) => a = 2 
// the rest we understand

// even shorter
// by taking out the zero
// we are setting the accumulator to the first element in the array
// so it will add from there and loop through the array like it did above
const result2 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(result2);

// Even shorter!
const result3 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result3);