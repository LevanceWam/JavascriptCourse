// create a circle object 
// using the obj literal syntax
// should have:
// radius property that we can read or write too
// area that is read only so we can noat edit it from the outside

const circle = {
    radius: 2,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};


console.log(circle.area);