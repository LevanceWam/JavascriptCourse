// Abstraction hide the details and show the essentials
// we are going to create some properties that the user shouldnt see

function Circle(radius) {
    this.radius = radius;

    // we want to hide this and the function directly below it
    // we only want to show radius and draw
    // having some properties accessible can cause our obj to be put into a bad state
    // or complicate things
    // with let in front of it this has become a private property
    let defaultLocation = {
        x: 0,
        y: 0
    };

    // with let in front of it this is a private method
    // this is only local to the function and can not be accessed outside
    let computeOptinumLocation = function (factor) {
        //..
    }
    this.draw = function () {
        // since the function is no longer a method of a new obj
        // we can't access it using 'this' anymore
        // we have to call it directly
        // this way of doing it works because in JS we have this concept of closure 
        // in contrast to scope we have closure
        // closure determines what variable will be accessible to an inner function
        // so all of the local variables defined in the current function 
        // and the parent function
        // be careful not to get scope and closure confused
        // scope is temporary and it dies
        // but closure stays
        // so when we call the draw function after we finish executing 
        // the variables will continue to stay in memory they will preserve their state 
        // becasuse they are apart of closure of the draw function
        computeOptinumLocation(0.1);


        console.log('draw');
    };
}

const circle = new Circle(10);