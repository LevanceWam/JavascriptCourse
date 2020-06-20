// Intermediate Function Inheritance
// so with our currrent implementation everything is working and that is great 
// but things have gotten a little noisy so we are going to clean up the code a little
// lets create a function that extends the inheritance

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

// the function extend will take 2 parameters child and parent
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

// this extend function is what we call Intermediate Function Inheritance
extend(Circle, Shape);

Circle.prototype.draw = function () {
    console.log('draw');
}

// lets create a square that inherits from shape
function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const s = new Shape('blue');
const c = new Circle(1, 'green');
const sq = new Square(5);