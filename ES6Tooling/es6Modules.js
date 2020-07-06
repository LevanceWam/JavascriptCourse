// lets take a look at ES6 modules
// first we are going to want to take our weakmap and class and move them to a seperate module
// then in that module we will export only the class  because it is the public interface of that module
// so we crreated a file called circ.js that we will export our class from

import {
    Circle
} from './circ.js';

// now if we were to look on the web console we would get an error a unexpected token
// there is a proper way to fix this issue using web pack but for this example we
// going to do a quick work around. This isn't something we want to do in production its just for this demo
// so we would go to the index.html
// in our script element we are going to need to change the type of script element to module
// with this our browser treats index.js like a module so it will understand the curly braces we have defined at the top of the file

// now we get a different error
// it is now a get request to local host port5500/circle 
// because in es6modules.js we are trying to load this module 
// that is why we have the http request to this endpoint 
// so as another temporary work around we just need to add the js extenstion to the end of circ at the top

// now when we refresh it will work

const c = new Circle(20);
c.draw();

// Final takeaway

// learn the syntax of ES6 modules 