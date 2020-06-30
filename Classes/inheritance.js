// inhertiance in classes

// lets take it to the next level 
// lets pretend our shapes need a color go and add a color to shapes 
class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move');
    }
}

// all we have to do to have circle inherit shape is to type the keyword 'extends'
class Circle extends Shape {
    // if we pass a plain constructor we get an expection
    // what is basically happening is this if we have a constructor in the parent class
    // then add a constructor to the child class 
    // inside of the child constructor we have to make sure to call the parent constructor first
    // to initilaze the parent object
    constructor(color, radius) {
        // we use the "super" keyword to reference the parent object
        // we call "super like a function"
        // then we are going to pass the color argument 
        super(color);
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 1);
// when we look at this in the console 
// we see that draw is in the prototype because we defined the method in the body of the class and not a constructor
// the prototype object itself has a prototype this is where we will find the move method
// pay attention to the constructor property here 
// we notice that Move object was created by the shape class
// with the extend keyword we do not need to reset the constructor