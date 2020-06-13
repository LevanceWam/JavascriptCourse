// one of the confusing concepts in JS is that
// functions are objects
// our cirle function is a object

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

Circle.call({}, 1); // same as line 14 this is referencing the object

const another = new Circle(1);