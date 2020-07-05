// using node commonjs modules
// we can run this code in terminal by typing node (name of file)

// we want to modularize this simple program
// a basic rule of thumb about modularity
// "things that are highly related should go together" this is called cohesion in software engineering
// the same concept applies to code

// Lets take the weakmap and the object and place them into a new file called circle.js
// first we are going to copy and cut the code from here

// on the top of the page we are going to import the circle module 
// we use the require function for this task
// the require function is a part of the commonjs format
// so common js format defines this require and module.exports
// these are the syntax used on commonjs format 
// inside the require we want to pass a relative path to the target module

// we use "./ to refer to the current folder and then add circle"
// note that we dont need to use the extension we don't need to add circle.js 
// it is assumed by default

// now when we require this we get is what is returned from the circle module
// we can store the result in a constant 
// then we can use the constant to create new objects

const Circle = require('./circle');


const c = new Circle(10);
c.draw();

// now we can run this application and everything should still work