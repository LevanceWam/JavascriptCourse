// it is important to know that it does not matter when you change the prototype
// in our example we are modifying the prototype before creating the object
// it doesn't matter if we create the object first then modify the prototype 
// our prototypes method will still be there.
// this is because we are dealing with object references
// so we have a single object in memory and as soon as we modify that. all the changes are immediately 
// visible 

function Circle(radius) {
    // Instance Members
    this.radius = radius;

    this.move = function () {
        console.log('move');
    }
}

// Prototype Members 
Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);

// lets learn how to iterate over instance vs prototype properties.

// Returns Instance members
console.log(Object.keys(c1)); // this returns all of the instance members
// notice that draw is not there because it is a prototype member
// Object.keys only returns instance members

// What about a for in loop
// this returns all members (instance and prototype)
for (let key in c1) console.log(key);