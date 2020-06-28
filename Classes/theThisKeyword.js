// lets take a closer look at the this keyword

// in JS we have something called strict mode. when we enable this mode 
// Js engine will be more sensitive so it will do more error checking
// if there are errors that silently fail its going to turn them into exceptions
// it will also change the behavior of the keyword 'this' in functions 
// to enable it at the top of the page write the following
'use strict'

// by enabling strict mode if you call a method as a function "this"
// by defaut will no longer point to the global object it will be set to undefine 
// the reason for this is to prevent us from accidently modifying the global object
// because that is bad practice.

const Circle = function () {
    this.draw = function () {
        console.log(this);
    }
}

const c = new Circle();
// When we print this on the console we will see a circle object 
// this is because "this" is pointing to the circle object
// Method Call
// this is because we are calling a method on a object
// in this case 'this' in the function will point to the circle object
c.draw();

// lets look at something interesting 
// we are going to create a reference to the method in the circle object 
// we are going to store it in the const 
// important note: we are not calling the method we are simply getting the reference to it 
// when this prints this will show the function of draw in the circle object
const draw = c.draw;


// Function call
// this is because we're calling 'this' on a stand alone function that is not part od an object
// so when we call this method as a function by default this will point to the global object which is the window in the broe
draw(); // when we call it like this we will get the window object


// let's see how the this keyword behaves in our ES6 classes

class Square {
    move() {
        console.log(this);
    }
}

const s = new Square();
const move = s.move; // making a reference to the method
move(); // calling like a function, note this comes out as undefine
// the reason we got undefined is because the body of our classes by default 
// are executed in the strict mode so when ever we explicitly enable strict mode or not
// JS engine will always excute the body of this class on the strict mode
// this will prevent us from accidently modifying the global object