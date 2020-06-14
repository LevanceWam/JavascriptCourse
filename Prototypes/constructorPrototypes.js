// remember that every object in JS has a prototype expect for the rootObject
// the proper way to get the prototype of an object is by using 
// Object.getPrototypeOf(myObj)
// this is the same to myObj.__proto__ that we saw in the chrome console
// these 2 gives us the parent of myObj
// Constructor.prototype (this is the same as line 3 )

// Important fact
// constructors also have a prototype property

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype; // this will make it that this object is used as the parent for the object created by circle constructor

const circle = new Circle(1);