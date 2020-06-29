// private members using weakmaps
// weakmaps is a new type in ES6 
// lets learn how to use it to implement private properties and methods in a object
// first lets try to change our radius property into a private property

// a weakmap is essentially a dictionary where keys are objects and values can be anything
// the reason they are called weakmaps is because the key are weak
// so if there is no reference to these keys they will be garbage collector
const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        // we will not be setting the radius property anymore instead
        // we are going to work with the radius key map we can call the "set" method 
        // the first argument is the key and the key has to be an object, it can not be a symbol
        // first we are going to pass the keyword 'this' it represents the instance of circle object that is the key
        // for the value we are going to use the radius argument
        // now technically we can access this radius radius private property if we can get access to this weakmap
        // but later when we talk about modules we can learn how to hide it with the help of a model and only export the circle class
        // so if we can imagine us getting the circle object from somewhere esle
        // we wont have access to the weakmap 

        _radius.set(this, radius);

    }
    // now if we wanted ti access this property inside of the class 
    // we can try this
    // lets pretend like we want to read this somewhere 

    draw() {
        // in order to read the radius property we use our weakmap radius 
        // but inside of calling the set method we call the get method
        // we need to reference a key on this case the key is the instance of the circle object so we use 'this'
        // now this will return the value of the radius property
        console.log(_radius.get(this)); // this will return 1
    }
}

const c = new Circle(1); // if we try to use the dot notation we can not find the radius property
// if we inspect the circle object on the console we will not find the radius property on there either

// lets try it with a private method

const _move = new WeakMap();

class Square {
    constructor(radi) {
        _radius.set(this, radi);

        // this is a private method for a class
        // we are printing 'this' to see what happens in this context
        _move.set(this, function () {
            console.log('move', this);
        });
    }
    // lets try to call the private method from a public method below
    // not the best example but for sake of the example lets trit

    moving() {
        _move.get(this);

        console.log('moving');
        // when we console log the method above it prints the move but 
        // 'this' comes out to undefined
        // this is because the body of this class is executed in strict mode
        // and 'this' by default is set to undefined as opposed to the global object
    }
}

// now what if we wanted to access the instance of the circle object

class Triangle {
    constructor(area) {
        _radius.set(this, area);

        // instead of using a regular function
        // we can use a arrow function and then the problem will go away
        // this is because arrow functions use 'this' value of their containing function
        // so in this case 'this' will not be rebound it will
        // be inherited frim what we have in this constructor
        // so in this constructor this references a circle object
        // and when we use a arrow function inside of this function
        // 'this' will not be rebound , it's not going to be reset
        // it'll be inherited fro the constructor function
        _slide.set(this, () => {
            console.log('slide', this);
        });
    }

    moving() {
        _slide.get(this);

        console.log('moving');
    }
}