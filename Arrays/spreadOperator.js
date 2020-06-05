const first = [1, 2, 3];
const second = [4, 5, 6];

// going off the last file there is an easier way to 
// combine arrays in ES6
// spread

// const combined = first.concat(second);
// when we spread an array all of its elements are spread/returned indiviually
// the spread operator provides a little more flexibitily
// we can add elements in between the 2 arrays
// even add them to the beginning or the end

const combined = [...first, 'a', ...second, 'b'];

// this will that all the elements in the combined array and put them in the new one.
const copy = [...combined]