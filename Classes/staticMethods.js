// in classical object oriented langauges we have 2 types of methods
// instance methods and static methods


class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // instance method 
    // this is because this method is availiable on an instance of a class which is an object

    draw() {}

    // in contrast we have static methods 
    // static methods are availiable on the class itself not the object instance 
    // we often use them to create ulitily functions that are not specific to a given object
    // for example our draw method is specific to the circle object

    // static method
    // to make the method static we have to add the keyword 'static' to the front of it
    // now this method will no longer be availiable on a circle object 
    static parse(str) {
        // this is a valid json object 
        // with this method we dont have to create a circle object first 
        // because we dont have a circle object to start with we have a json string 
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

// now will shouldnt be able to call circle.parse
// const circle = new Circle(1);

// returning a circle object by the json string 
const circle = Circle.parse('{"radius": 1}')

// but it is accessible on the class reference 
// so what is happening here is we are not working with a circle object
// we are wotking with the class itself
// so to call static methods we dont have to create a instance of a class
Circle.parse()

// lets go back and implement the method