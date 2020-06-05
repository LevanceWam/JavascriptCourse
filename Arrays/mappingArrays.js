// map method
// with this method we can map each item in a array
// to something else
// going off the last example from filtering arrays
// lets say we want to construct some html mark up  
// using the elements in this array

const numbers = [1, -1, 2, 3, 4];

const filtered = numbers.filter(n => n >= 0);
console.log(filtered);

// another call back function
// with the current markup we can display each of the numbers
// using a bullet point
// we need to put these in a ul element 
const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items); // returns postive numbers

// now that each number is map to a string
//  we can use the the join() to join the array and create a string 
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// we can also map these numbers to objects
const items2 = filtered.map(n => {
    const obj = {
        value: n
    };
    return obj;
});
console.log(items2);

// an alternative to the top
// we do not need to declare this a seperate const
// its a little simplier to use the keyword return and return the object
// this is because we are not working with the const
const items3 = filtered.map(n => {
    return {
        value: n
    };
});
console.log(items3); // gives us the same results as above

// if you noticed both filter and map are creating new arrays
// the old one is not altered
// map and filter are chainable
// this means we can call them one after another in a chain
// this is what that would look like


// for the map method we have on here.
// this is the same as the code above this 
// when chaining we do this on a new line to make the code
// look cleaner
// note that the map is returning a new array we can call filter or map method on that array

const filterItems = numbers
    .filter(n => n >= 0)
    .map(n => ({
        value: n
    }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(filterItems);