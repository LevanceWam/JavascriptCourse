// we are going to try and duplicate 
// but we can't copy and paste items, copy and pasting and bring more problems to the table. like if there is a bug in the method then all of them will have the same bug
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function () {
        console.log('draw');
    }
};

// if an object has one or more methods we say that object has behavior
//let's make a factory function
// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const cir = createCircle(1);
cir.draw();