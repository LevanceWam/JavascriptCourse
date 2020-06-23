// Polymorphism is a important and powerful concept in OOP
// Poly means many and morph means from so polymorphism means many forms
// Again this is a extremely powerful techinque in OOP
// lets start off by creating a new shape object called square

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
    console.log('duplicate circle');
}


function Square() {}

// just like our circle object we will have it inherit from the shape object 
extend(Square, Shape);

// then we redefine the duplicate method on the square object
// So now looking at the hieracrhy we have the shape and its 2 child objects deriving from it 
// Eacg object will provide a different implementation of the duplicate method meaning we have many implementations or many forms of the duplicate method 
// this is what we call polymorpism
Square.prototype.duplicate = function () {
    console.log('duplicate square');
}

// Now why is this so powerful in the coming example we will see why
// Lets try this with an array filled with shape objects 

const shapes = [
    new Circle(),
    new Square()
];

// Now we can iterate over the array using For of Loop

for (let shape of shapes)
    shape.duplicate();

// Depending on the type of the shape object, a different form or different implementation of the duplicate method will be called 
// so if shape is a circle the implementation of duplicate in the circle object will be called 
// same with square implementation

// why is this powerful
// Before OOP if we wanted to implement this logic we would have to write code like this
// note that the functions here are stand alone functions not apart of OOP
// we are writing this the Non-OOP way of coding
// in OOP we encapsulate our variables and functions into objects

// for (let shape of shapes) {
//     if (shape.type === 'circle')
//         duplicateCircle();
//     else if (shape.type === 'square')
//         duplicateSquare();
//     else    
//         duplicateShape();
// }

// Since this is a simple program it looks like this 
// what if we had 10 different types of shapes
// we would have 11 conditional statements
// in this block
// in contrast when we encapsulate variables and functions into objects and use inheritance
// we can execute many forms of a methof using a single line of code