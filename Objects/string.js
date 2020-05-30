// Built in string object
// in JS we have 2 different kinds of strings
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// go to the link to read more on string 


// string primitive
const message = 'This is my first message';
// when we use dot notation on a string primitive
// JS engine internally wraps this in a string object
console.log(message.length); // this returns the number of characters in a string
console.log(message[0]); // this is how we can access a character at given index
console.log(message.includes('my')); // checks to see if chars or a word is in a string
console.log(message.startsWith('This')); // this is case sensitive
console.log(message.endsWith('e')); // this is case sensitive
console.log(message.indexOf('my')); // we use this to find the given index of a char or string
console.log(message.replace('first', 'second')); // this returns a new string and doesn't modify the old one. Replaces word or char.
console.log(message.toUpperCase()); // this returns a new string with all of the char captialize
console.log(message.trim()); // This removes the whitespace from the beginning and end of a string 
// We also have trim left with removes whitespace from the beginning
console.log(message.split(' ')); // we can split a string based on a given character 
// what we get is an array of items  and each of the items in the array is a word from the string




// String object
const another = new String('hi');

console.log(typeof message); // string 
console.log(typeof another); // object