// Private Members Using Symbols
// Remember that abstraction is one of the core prinicples of OOP
// abstraction means hiding details and complexity and only showing the essential parts
// think of DVD player as an example of abstraction
// to implement abstraction we use private properties and methods 
// so we can hide certain members of an object so they won't be accessible from the outside

// so in ES6 we have a new primitive type called symbol
// symbol is a function we call to generate a symbol
// A symbol is essentially a unqiue indentifier everytime we call this function
// we get a new unqiue identifier.
// if we compare a symbol to a symbol we will get false because they are not the same 
// everytime we call a symbol function we get a new, unqiue value
// we can use this unqiue value as the property name for an object


// Important note this is not a constructor function so we can not new that up otherwise we get an error


const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        // this property is public by default
        // so if we were to create an object 
        // we can access this property
        // in this case we want this property to be public because it is an essential 
        // attribute to the object
        // (this.radius = radius;)


        // now what if we wanted to make the property private
        // there are 3 ways in es6 to do this lets take a look at them
        // the first approach doesnt really count because you can still 
        // access it publicly, you would prefix the property with a underscore
        // (this._radius = radius;)
        // this is more of a naming convention not abstraction
        // it doesnt prevent another developer from writing code against this property

        // remember with abstraction we want to hide the some of these properties and methods from the outside 
        // so as we change them we isolate the impact of change to the containing object 
        // we do not want these details to leak to the outside

        // in this example we are going to use symbols to achieve private methods and properties and later we will use mapping to do the same thing

        // in the console log we will see the impact of this change using the symbol
        // in the property we will see that is a symbol
        // this is how we see internally the name of the property is a unique value
        // so if we set multiple properties using symbols
        // the property names all show up as symbols
        // but internally they are still unique
        // this is kind of a half private and not private
        // if we were to try and call this property using dot notation it will not show up
        // meaning we can not directly access the property in the code 
        // but there is a hack around that
        this[_radius] = radius;

    }
    // last way to make things private
    // remember we can add methods in this area of the class
    // lets go make another symbol at the top and comeback
    // in ES6 we have this new feature called computer property names 
    // we can add brackets and inside of the brackets we add an expression
    // when the expression is evaluted the resulting value will be used as the name of a 
    // property or method 
    // so we will pass draw here 
    // now this expression (symbol) will be evaluted 
    // we get a unique value a unqiue identifier and because we have that inside of the brackets 
    // that unique identifier will be used as the name of this method 
    [_draw]() {

    }
}

const c = new Circle(1);

// the hack
const key = Object.getOwnPropertySymbols(c)[0]; // this returns symbols
console.log(c[key]); // we would never write like code this