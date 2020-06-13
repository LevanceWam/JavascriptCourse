// Every object in JS has a property called constructor
// Remember it's used to reference the function that was used 
// to construct or create objects


// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const cir = createCircle(1);
cir.draw();

// constructor functions 
// In JS we do not have the concept of class like in python
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw from the constructor');
    }
}

const circ = new Circle(1);
// remember that new creates a new empty object
// the 'this' we have in the function above will point to that object and fill it
circ.draw();

console.log(circ.constructor);
console.log(cir.constructor)