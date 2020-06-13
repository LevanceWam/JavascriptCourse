const circle = {
    // location and radius are properties
    // remember properties hold values
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    // a function inside of a object is a method
    // this is a method
    // remember functions and methods are used to define some logic
    draw: function () {
        console.log('draw')
    }
};
// we can call the members in the obj using the dot notation
circle.draw();