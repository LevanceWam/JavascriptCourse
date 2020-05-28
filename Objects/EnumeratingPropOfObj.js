// Enumerating Properties of an Object
const circ = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

// for in loop
for (let key in circ) {
    // With this we can iterate over all the properties
    // and methods of an obj
    // if we want to get the value pass a second agrument
    console.log(key, circ[key]);
}

// for of loop
// for (let key of circ) {
//     console.log(key) // this will throw a error
//     // for loops are only good for iterating over arrays and maps
//     // Object are not iterable
// }

// However...
// We have this method Object.keys(nameOfObjHere)
// With this we can get all of the keys in the obj
// this will return an array
for (let keys of Object.keys(circ)) {
    console.log(keys)
}

// Here is another method similar to the one above
// Entries 
// So instead of returning the keys as a string array
// It returns each value pair as an array
for (let entry of Object.entries(circ)) {
    console.log(entry)
}

// Finally sometimes we want to see if a object has a 
// given property or method.
// we can use the in operator
// with the in operator we can see if a given property exist in a object


if ('radius' in circ) console.log('yes');

// Take away 
// The simplest way to enumerate the properties in a obj
// is using a for in loop