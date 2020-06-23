// While inheritance is a great tool for solving the problem
// of code reuse we have to be really careful About using it
// this is because it can make your source code complex and fragile
// so dont use inheritance just for the sake of using it especially in small projects 
// Remember keep it simple and stupid

// Start with simple objects and if you see a number of these objects share a similar features 
// then perhaps we can encapsulate those features inside of a generic object and use inheritance 
// but remember inheritance is not the only solution to enable code reuse 
// there is another technique called composition. 
// lets look at the problem with inheritance.

// Lets say we have a animal object with 2 methods eat and walk
// then we have 2 objects that derive from animal person and dog
// lets say later on we introduce a new object called goldfish that derives animal
// Our hierarchy is broken this is because fish can't walk they swim
// so we have the hieracrhy wrong
// This is something that happens quite often especiallty amongst inexpericenced developers
// To solve this problem we have to change the hierarchy

// On the top we should have the animal object with the eat method under that we're going to have 2 objects named mammal and fish
// The mammals will walk and fish can swim and then we can have
// person and dog derive from the mammal and goldfish derive from fish 

// Now we see as a result introducing a new kind of animal (goldfish)
// we had to change the hieracrhy and now the hierachy is more complex then what we started with
// now what would happen if we had 10 different types of animals 
// the hierarchy would be more complex 
// causing us to go back and forth to determine the right place to implement a method 

// Important 
// Aviod creating inheritance hierarchies 
// because they are very fragile 
// if you want to use inheritance keep it to one level do not go more than one level above inheritance 

// There is a famous saying that goes 
// "Favor Composition over Inheritance"
// with composition instead if having the complex hierarchy like our example above 
// we can compose a few objects together to create a new object 
// this technique gives us great flexibility

// going back to our previous example instead of using inheritance we can define various features
// for our animal objects as independent objects 
// so we can have  3 objects canWalk, canEat, and canSwim
// Each of these objects are plain Javascript objects with certain properties and methods
// now we want to have a person object 
// so simply compose canWalk and canEat to create a person object
// later we want to introduce a goldfish 
// we can compose canEat and canSwim together to produce a goldfish
// so we don't have a hierachy and we can come up with any combination
// of these objects to create new objects 

// in JS we can use mixins to achieve compistion
// please refer to the next file 