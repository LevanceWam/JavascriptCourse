// method Overriding
// this is when we have methods in a base class or a base object but we want to change
// its implementation in a derive class or a derive object
// so maybe the algorithn for noving a shape is common amongst most of the shapes but perhaps our circles
// need a different algorithm to be moved

// so we can override the move method by reimplementing it in the move class

class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log('circle Move');
    }
}


const c = new Circle();

c.move(); // the implementation in the child object will be used
// the reason for this goes back to prototypical inheritance 
// when we call c.move JS engine looks for it on the object itself 
// if we didnt have it on this object JS engine looks at the prototype for this object

// lets imagine a scenario where you want to reuse some of the code you have implemented in the parent method
// in that case we can call that by using the "super" keyword
// with this we can now call the move method from the parent and call the new move from the child object