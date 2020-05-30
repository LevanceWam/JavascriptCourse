// One of the confusing concepts in Js is that functions are objects 
// the circle function below is a object
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log(draw);
    }
}

Circle.call({}, 1) // this is what new is doing behind the scenes

const another = new Circle(1);
console.log(Circle.name); // returns the name of the function
console.log(Circle.length); //return the number of arguments 