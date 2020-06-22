function mixin(target, ...sources) {
    // Remember when using the rest operator here it returns an array
    // with the assign method we can not use arrays we have to call them indiviually
    // so what we can do is us the spread operator to spread the array into multiple arguments
    Object.assign(target, ...sources);
}

// so instead of calling Object.create we can replace it with mixins

// Here we are defining features as objects

const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function () {
        console.log('walking');
    }
};

const canSwim = {
    swim: function () {
        console.log('swim');
    }
}

// now lets compose these objects together and create a person that can walk and eat
// In ES6 we have a new method that is (assign)
// we can use this to copy the properties and methods from one object to another 
// so we would pass an empty object as the target
// then we would pass one or more source objects
// so when we pass canEat and canWalk here 
// the Object.assign will copy all the methods and properties that we have defined in canEat into the blank object
// and since we are passing 2 objects our empty object will be the combination of the 2

const person = mixin.assign({}, canEat, canWalk);
// console.log(person);

// if we are using a constructor function we can still use this technique
// we can now add any properties and methods specific to personObjects

function Person() {}

// After that insted of passing a empty object like above we can do this 
// we cam do this 

mixin.assign(Person.prototype, canEat, canWalk);

// Now basically we have modified the prototype of person 
// And adsed the capability to eat and walk
// so the next time we create a person object
// the person will have these capabilites

const per = new Person();
console.log(per.walk());

// now lets say we wanted to add two new applications on this app
// goldfish and duck
// both the goldfish and the duck should have the capability to swim
// back at the top create the feature swim
// make the goldfish constructor

function Goldfish() {}

mixin.assign(Goldfish.prototype, canSwim, canEat)

const goldie = new Goldfish();
console.log(goldie);

// to make the code a little bit more readable 
// we can extract the logic from the object assign and 
// create a function called mixin
// go back to the top and define the logic