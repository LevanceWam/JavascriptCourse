// Avoid Extending the Built-in Objects 
// earlier we learned how easy it is to modify the prototype of an object

// We could be tempted to do something like this
// This is very easy to accomplish in JS

Array.prototype.shuffle = function () {
    //..
};

const array = [];
array.shuffle();

// even though this is easy to do we should try to avoid doing something like this
// we should not modify the built in objects in JS 
// Because it is possible we might use a library and in that library someone 
// has extended the array prototype and added the shuffle method but with a different implementation
// this can lead to us spending a long time debugging the problem
// Also nothing stops the developers of javascript from adding this method of arrays to future versions of JS

// Big Take Away
// Do Not modify objects you Do Not own!
// We understand that JS is a dynamic language 
// it makes it easy to add properties and methods to that existing obj
// but that doesnt mean that we should modify the built in objects
// so dont overwrite methods, dont add new methods or properties
// and dont remove exisiting properties and methods 
// because somewhere else in a library you might be using , there might be code that is dependent 
// on those methods in the built in objects
// so if you modify the built in objects you will create all sorts of issues