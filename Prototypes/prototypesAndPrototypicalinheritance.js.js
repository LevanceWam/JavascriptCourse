// A prototpye is just a regular object in memory
// every object has a prototype or a parent expect the root object
// prototype is essentially a parent of another object
// every object in JS except for the rootobject has a prototype or parent 
// and objects inherits all the members we defined in its prototype

// note that the proto propery is deprecated and should not be directly accessed 
// it is only availible for us to trouble shoot problems
// so if we have a intial object in memory that obj has a link to another object 
// which is its prototype lets can call this the rootObject

// so every object that we create in JS directly or indirectly
// inherits from the rootObject
// rootObject is the base of all objects in JS
// rootObject does not have a prototype or parent

// so in memory our objects reference the rootObject
// so we have a single instance of rootObject in memory

// So if we define an empty object and see properties and methods this is what is happening:
// so when we access a property or a method on a object 
// Javascript engine first looks for that property or method 
// first on the object itself if it is not found
// then it looks at the prototype for that object
// so if it can not find that member it will look at the prototype of that object all the 
// way up to the root object we called rootObj
// that is prototypical inheritance in action
// when accessing a property or a method on an object.
// Javascript engine mocks up the prototype chain to 
// find the target member.