// Adding and Removing properties

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(2);

// let's try to add a new property
circle.location = {
    x: 10,
    y: 20
};

console.log(circle);

delete circle.location;