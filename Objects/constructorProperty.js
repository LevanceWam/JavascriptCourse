// every object in Js has a property called constructor
// it references the function that was used to construct or create that object

// Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }
//     }
// }

// const circle = createCircle(1);
// console.log(circle.constructor)

// // Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('drawing');
//     }
// }

// const another = new Circle(1);
// console.log(another.constructor);

// big take away
// every object has a constructor property 
// that references the function to create that object