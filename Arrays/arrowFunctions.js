// this is some code we wrote in the last file
const courses = [{
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    },
];

// in ES6 there is a shorter way to write this function using arrow function
const course = courses.find(function (course) {
    return course.name === 'a'
});
console.log(course);

// So whenever we want to pass a function,
// as a callback function or as an argument for a different method 
// we can use the arrow function syntax.
// first we get rid of the function keyword
// then to seperate the parameters of the function from the body with =>
// => is what we call an arrow function
// now if the function only has 1 parameter we don't need the parenthesis making the code cleaner
// if we don't have any parameters then we have to pass empty parenthesis 
// finally if the function is a single line of code and is returning a value we can make it smaller

const course2 = courses.find(course => course.name === 'a');