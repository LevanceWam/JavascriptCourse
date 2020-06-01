// in the past we looked at for of loops 
// we can use these loops to iterate through an array
const numbers = [1, 2, 3, 4];

for (let number of numbers) {
    console.log(number);
}

// there is another way to do this
//  all arrays has this method called 
//  foreach

const newNum = numbers.forEach(function (number) {
    console.log(number);
});

// we can use arrow functions to make it look cleaner
const newNum2 = numbers.forEach(number => console.log(number));

// with foreach we can pass one more argument 
// for this we are going to get the index 
const newNum3 = numbers.forEach((number, index) => console.log(index, number));