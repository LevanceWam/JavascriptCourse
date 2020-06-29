// This is a simplified example from the last file

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    // what if we wanted to just read the value from the outside
    // one way to do this is to define a method like below:

    getRadius() {
        return _radius.get(this); // if we were to print this it will return the object so we will see 1 
    }

    // lets try to read the value as a property
    // in ES6 we made this really easy compared to how we did getters and setters earlier

    get radius() {
        // get allows us to access this method like a property
        // so in the console we can type it like this 'c.radius' 
        return _radius.get(this);
    }
    // we can also defune a setter very easily

    set radius(value) {
        if (value <= 0) throw new Error('Invalid radius');
        _radius.set(this, value); // this allows us to change the value of the radius
    }


}

const c = new Circle(1);