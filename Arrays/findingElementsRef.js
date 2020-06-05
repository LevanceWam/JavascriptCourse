// Finding Elements Reference Types
// when ever we need to find out about an obj or function in js 
// search for it 
const courses = [{
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    }
];

console.log(courses.includes({
    id: 1,
    name: 'a'
})); // this will return fasle
// this is because these 2 objects (The one in the includes and the object we defined in the course array)
// Are 2 different objects 
// they have 2 different references, 
// they are in 2 different locations and memory

// so if we have an array with reference types we need to use the find method 
// note that the argument to this method we have to pass a function
//  we call this function a predicate or a callback function
// because the function is called back as a part of finding an element in this array
// we are going to use it to see if the given element exist in the array
// the function take a parameter that is the element in the array
// In the body of the array we should return a boolean
// if we do not find the element we are looking for we will get undefined 
const course = courses.find(function (course) {
    return course.name === 'a';
});
console.log(course);

// this will return the index of the element
const course2 = courses.findIndex(function (course) {
    return course.name === 'a';
});

console.log(course2);