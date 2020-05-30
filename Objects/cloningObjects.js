const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// lets copy our circle object and put it in another

const another = {};

// we can use (for in) to iterate over circle and copy it into another
for (let key in circle) {
    // we use bracket notation to access 
    // a property with a given key
    another[key] = circle[key];
}
console.log(another);
// Using the techinque above for copying or cloning an object is a little old
// in modern JS we do this
// One way is to use the objecet.assign method

// In the assign method for the first argument we can pass a 
// target obj that can be empty or an existing one 
// then we can pass one or more source objects
// This method takes all the properties of this method
// in the source object and copies them to the new object
// then it finally returns the result to the variable we are declaring
// this line of code is is exatly like the (for in) loop we made earlier
// now the target obj we have doesn't have to be empty
// it can be an existing obj, it can have 1 or more properties and methods
// Let's try adding a property inside of the object
const another1 = Object.assign({
    color: 'yellow'
}, circle)
console.log(another1);

// Let's look at a simpler way to do this with the spread operator
// first we set a new obj and then use the spread operator which is (...) to spread an obj
// this is what is happening the operator takes all of the properties and methods
// and puts them inbetween the curly braces of the new obj
// this is the simplest way to clone an obj
const another2 = {
    ...circle
};

console.log(another2);

// take away
// object.assign copies the properties and methods from 1
// or more source objects into a target object and we can use that to clone an object 
// or combine multiple objects into a single obj
// the spread operator is used to spread an object which means
// getting all of the properties and method from one obj and putting them into another object