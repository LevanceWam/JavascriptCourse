// in es6 there is a new way to create objects and implement inheritance
// by using classes, these classes are not like the classes
// we have in languages like c# and java 
// their essentially syntactic sugar over prototypical inheritance that's
// why in the last section we had to learn prototypical inheritance the way that we did 
// so we can understand how prototypical inheritance works 
// before we look at the new syntax which is cleaner and simpler

// a regular constructor function
// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function () {
//         console.log('draw');
//     }
// }

// Lets create a class of the function above
// one special method that we have is called (constructor)
// we use it to intialize objects like the constructor function above
class Circle {
    // in the method we pass the parameters

    constructor(radius) {
        this.radius = radius;

        // if we do not want a method on the pototype we have to do it in here
        this.move = function () {};
    }

    // everything on the outside of the constructor method 
    // will be a prototype
    // if we wanted to define a method we would do it like this
    // in the body of the class

    draw() {
        console.log('draw')
    }
}

// we can make a circle object like we did before 
const circle = new Circle(1);

typeof (Circle);
// this returns a functions
// classes are basically constructor functions 