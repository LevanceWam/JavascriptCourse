// Factory Functions
// inside of the function we have the object that we created
// we are going to return the object
// so whenever we get a call the create circle function
// we will get a circle object.
function createCircle(radius) {
    return {
        // we want to get rid of the hard coded values we had from the 
        // previous file basics
        // so we pass the key as a parameter to give it a value.
        // in modern JS if the key and the value are the same just declare the value
        // so we go from radius: 1 or radius: radius to the line below.
        radius,
        // now we are going to make the function a little bit shorter
        // this is similar to how we define a regular function 
        // inside of an object we can drop some of the syntax 
        draw() {
            console.log('draw');
        }
    };
}

// the awesome thing about factory functions is that 
// we have defined the logic in one place so we can call the 
// function with different values, arguments and get different circle objects.


const circle1 = createCircle(1);
console.log(circle1);