// we are going to look at a special kind of method 
// in objects called getters and setters

const person = {
    firstName: 'Vance',
    lastName: 'Wamley'
};
// lets console out the first and last name together
console.log(person.firstName, person.lastName);
console.log(`${person.firstName} ${person.lastName}`);

// here is where a problem can arise 
// what if we need to use first and last in multiple places 
// we don't want to rewrite this a million times
// so lets look at a easier way
// lets define a method in the object to create the fullname

const person2 = {
    firstName: 'Vance',
    lastName: 'Wamley',
    fullName() { // we are calling a function her
        return `${person2.firstName} ${person2.lastName}`
    }
};
console.log(person2.fullName());

// here  are some problems with what is above
// with this approach
// first this is read only
// this means outside of the obj we can not set the persons name to something else
// also do we really want to call this as a method
// we should try to call this as a property

// Time for getters and setters
// getters => access properties in a object
// setters => change (mutate) them
// lets implement them below 
// first we prefix the method with get keyword and then it is a getter
// now we can access the method like a property on line  compared to line 25
// now to change it on the outside we need a setter
// when we create the setter we need to pass a parameter


const person3 = {
    firstName: 'Vance',
    lastName: 'Wamley',
    get fullName() { // we are calling a function here
        return `${person3.firstName} ${person3.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person3.fullName = 'Papa Johns';
console.log(person3);