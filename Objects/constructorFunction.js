// constructor functions

// previously we used factory functions
// factory functions naming conventions use camel notation
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

//  constructor function
//  its main job is to construct or create a object
// the name convention that we use for constructor functions is different
// constructor functions use Pascal notation
function Circle(radius) {
    // instead of returning the object
    // in JS we have a keyword this
    // it is a reference to the object that is executing this piece of code
    // for now we are imagining that this refences a empty object
    // we use Dot notation to access the properties and use it to set them
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
// lets create a circle object
// when we use the operator new 3 things happen.
// it creates a empty JS object
// Then it will set this to point to the new empty object we created.
// finally the operator new will return the object from the function
// we don't have to write the return statement 
// all of this happens under the hood.
const circle = new Circle(1);