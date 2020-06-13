let person = {
    name: 'jack'
};

console.log(person.toString()); // this method was found in its prototype

// if we were to iterate through the members of this object
// we will not see this method
// so the question is why cant we iterate over all the properties and methods
// defined in the root object
// this is because in JS our properties have attributes attached to them
// sometimes these attributes prevent a property from being enumerated

// first lets get the prototype for person 
let rootObject = Object.getPrototypeOf(person);

// now lets look at the attributes attached to the toString method
// this will return an object we will call descriptor
let descriptor = Object.getOwnPropertyDescriptor(rootObject, 'toString');
console.log(descriptor); // this will show us the properties we didnt see when we iterated earlier

// now that we know how to create our own objects we set these attributes for our properties
// we do that like this:
Object.defineProperty(person, 'name', {
    writable: false, // this will make the property read only
    enumerable: false, // now when we try to iterate through the object nothing will show 
    configurable: false, // now we can not delete the property
})