// sorting arrays 
const numbers = [2, 3, 6, 8, 1, 9, 5, 4];
// the sort method takes all the elements and converts them 
// in string then sorts the elements in the array
const sorted = numbers.sort();
console.log(sorted)

// another method that is a companion of sort is reverse
// The reverse method can reverse the order of elements in a array
sorted.reverse();
console.log(sorted);

// the sort method is really useful and easy to use
// when you have numbers and strings in an array
// but when you have objects like course objects it does not work by default  
// we have to do some extra steps

const courses = [{
        id: 1,
        name: 'Node.js'
    },
    {
        id: 2,
        name: 'javascript'
    }
];

// so if we wanted to sort the array by the name of the courses
// just using the plan sort method will not work
// so with sort it optionally takes a argument 
// which is a function that is used for comparison
// so when we call the sort method the method gets two objects in the array
// then compares them. if it is already on the right order it
// will move on to the next set of elements

courses.sort(function (a, b) {
    // a < b => -1 
    // a > b => 1 
    // a === b => 0 

    // why are we lowercasing the string
    // this is because each character has a numerical value
    // the lowercased characters have a higher value than the upper case
    // so when we try to compare the lower and upper case it won't be accurate 
    // so this is when we change the string to all lower or upper 
    // to make it more accurate
    // go to  https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
    // to see the numerical representation of each char

    nameA = a.name.toLowerCase();
    nameB = b.name.toLowerCase();


    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);