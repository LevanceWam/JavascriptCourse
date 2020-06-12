// Abstraction hide the details and show the essentials
// we are going to create some properties that the user shouldnt see

function Circle(radius) {
    this.radius = radius;

    // wee want to hide this and the function directly below it
    // we only want to show radius and draw
    // having some properties accessible can cause our obj to be put into a bad state
    // or complicate things
    this.defaultLocation = {
        x: 0,
        y: 0
    };

    this.computeOptinumLocation = function () {
        //..
    }
    this.draw = function () {
        this.computeOptinumLocation();
    };
}

const circle = new Circle(10);