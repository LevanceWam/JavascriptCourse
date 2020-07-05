// this is the module for es6module.js

// rememeber that by default that everything that we define her is considered private 
// unless we explicitly export it using the keyword "export"
// so we are going to place the keyword export infront of the class

const _radius = new WeakMap();

// now our class will be exported to the outside 
// now will have access to the circle class inside of es6Modules.js
export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}