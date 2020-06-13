function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

for (let key in circle) {
    if (typeof circle[key] != 'function')
        console.log(key, circle[key]);
}


const keys = Object.keys(circle); // this will return all the keys in the object as a array
console.log(keys); // with this approach we can not seperate properties from methods

// to find out if a property is in a object us the 'in' operator
if ('radius' in circle)
    console.log('Circle has a radius.')