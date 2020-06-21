// A simplified version of the code from the previous example 
// Method overriding is the remimplementing a method in a child object

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent);
    Child.prototype.constructor = Child;
}

// sometimes when we work with inheritance we may get
// situation where this implementation that we defined 
// in a parent object might not work or may not be ideal in a child object

// lets imagine the parent algorithm for duplicating a shape works for most of the
// shape objects, but maybe we want it to behave differently in the circle objects
// How can we do this 
// we would use method overriding
// we override a method that is defined in the base object
// this is very easy all we have to do is redefine the duplicate method in the circle object


function Shape() {
    //
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle() {
    //
}

extend(Circle, Shape);

// so we start off by copying the method and redefining it under our extend function
// this is very important to put this after extending our circle 
// because we are resetting the prototype 
// so if we were to define it before extending the circle we wouldn't see the results
// it would disappear


Circle.prototype.duplicate = function () {
    // so here we are going to aslo implement the parents method along with 
    // the override

    // let's call the duplicate method on the parent 
    // if we are not using the keyword 'this' in this implementation we can simply call it like a regular function
    // now if we are using keyword 'this' in the implementation then we need to use the call method to set the context for keyword 'this'


    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle')
}

// now on the console we should see the new message
// The reason this worked goes back to how prototypical inhertiance works in javascript
// when we access a property or a method on a object
// JS engine walks up the prototype chain and picks the first implementation
// so even though on the hierachy we have implemented the duplicate method 
// on both on the parent and the child object the implementation on the child object will be used 


// sometimes we may want to call the implementation on the parent object as well
// lets try to do that
// please refer back to the circle prototype we have defined 

const c = new Circle(1);