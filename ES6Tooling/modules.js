// so far we have been writing all of our code in one file 
// this is not how we do it in the real world applications
// this is because we do nt want to have one gigantic file with hundreds or thousands lines of code
// it makes it hard to maintian so we should split the code into multiple files and we call each of these files
// module this gives us a number of benefits 

// first is that we can increase the maintainabitily of our application
// because our code is better organized

// second is that we get to reuse one or more of these modules in different parts of an application
// or in different applications 

// third is that we abstract code so we can apply the abstraction prinicple 
// which means we can hide some of the complexity in a module and expose the essentials

// lets use the code below as an example
// what we should do here is take the circle class and the radius weakmap out of this file and put it in a seperate file which we call a module\
// and then only expose the circle class to the outside so we can import the file here
// create a circle objexr but not have access to _radius object which is our weakMap

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

const c = new Circle(1);
_radius.get(c); // this is what we would do to access radius instead of c.radius
c.draw();

// Quick history on modules in javascript
// in ES5  we didnt have the concept of modules.
// so different solutions emerged to solve this problem 
// smart developers in the community introduced new syntaxes to define modules 
// we refer to these syntaxes as modules formats 
// some of the popular module formats we have are:

// AMD asynchronous module definition and this is primarily used in browser applications
// CommonJs which is used in node
// UMD which stands for universal module definition this can be used in both the browser and node 

// we used those module formats in ES5

// but as of ES6 Javascript native supports a module format  (ES6 modules)
// out of all of the formats we are going to only focusing  on 2 formats
// commonjs because it is used in node 
// and ES6 modules because that is used in browsers so technically going forward
// we are not going to have to learn about AMP or UMD unless we are maintaining a legacy application 