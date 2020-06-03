// join method
// we use it to join elements in an array
const numbers = [1, 2, 4];
const joined = numbers.join('**');
console.log(joined);
// another method that goes hand in hand with join is 
// split method 
// it doesn't work with arrays
// it does work with strings
// we can take strings and make them into arrays

const message = 'This is my first message';
const parts = message.split(' '); // will return the array with out the spaces
console.log(parts); // the string is now an array

// now we can join them together with the join method and use as seperator
const combined = parts.join('$');
console.log(combined);

// this technique is useful when making a url slug