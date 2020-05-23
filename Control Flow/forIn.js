// for in
// we use for in to iterate over the properties of an object
// we can also use them to iterate over array


const person = {
    name: 'Mosh',
    age: 30
};

// we use bracket notation to print the value in the array
for (let key in person) console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors) console.log(colors[index])