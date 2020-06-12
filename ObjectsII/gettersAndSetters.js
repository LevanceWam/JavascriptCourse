function Circle(radius) {
    this.radius = radius;

    // private property
    // this can not be accessed from outside of this function (dot notation)
    // but what if we wanted to display that default location somewhere in the application
    // we don't want to modify it we just want to read it
    let defaultLocation = {
        x: 10,
        y: 20
    };

    // One solution is to define a method
    // remember we are using a inner function
    // so the closure of this function includes all the variables defined here 
    // as well as all of the parent functions
    // this gives us access to the default location
    this.getDefaultLocation = function () {
        return defaultLocation;
    }

    this.draw = function () {
        console.log('draw');
    };

    // using object
    // first argument is setting the obj we want to add a new property to
    // that obj is the one that is referenced by 'this'
    // the second argument is the name of our property
    // the third argument is an obj
    // in this obj we add a key value pair
    Object.defineProperty(this, 'defaultLocation', {
        // so when we call circle.defaultLocation this function will run
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location');
            //we use setter if we want to set the value of this property
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.getDefaultLocation(); // but what if we don't want to call it like a method
circle.defaultLocation = 1; // what if we can access it like this, without setting it from the outside only read it (go to line 26)
circle.draw();