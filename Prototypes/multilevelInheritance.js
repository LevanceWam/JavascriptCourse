// so if we take an empty array and look at it's prototype property
// in the object we should see some familiar methods.
// so all of those methods are defined in the object which is the prototype for 
// all arrays in JS 
// so this is what we have in memory
// we have our empty array which derives from the rootArray
// and if we inspect the prototype of the rootArray
// the prototype of the rootArray is rootObject

// so to make this simpler lets visualize what is going on in the memory
// emptyArray -> rootArray -> rootObject
// so the emptyArray derives from rootArray, And rootArraty derives from rootObject
// this is known as multilevel inheritance

// what happens with the objects we create when we use custom constructors

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// if we were to inspect this circle object
// we would find that it has a prototype
// so this prototype is the prototype for all circle objects that we create using the circle constructor
// we will call it the circle base
// so everytime the circle constructor is called to create a new circle object the constructor will create
// a new object and set its prototype property to circle base

// in other words objects created by a given constructor will have the same prototype.
// so all circle objects created by circle constructor will have the same prototype

// the same goes for all arrays created by the array constructor will have the same prototype

// Again let's visualize what is going on in the memory
// circleObj -> circleBase -> rootObject
// so the circle object is inheriting from the circleBase which is inheriting from the rootObj