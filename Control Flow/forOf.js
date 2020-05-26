// for of loops
// similiar to for in
// this was brought to us in ES6 
// this gives us a way to iterate over a raise.
// this makes it to where we dont have to access the elenent at the given index
// basically used to iterate ove the items in a array.

const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person) console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];
// for-of
for (let color of colors) console.log(color);



// old for in
// for (let index in colors) console.log(index, colors[index])