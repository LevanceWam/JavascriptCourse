// create a function called sum
// that takes random arguments and return the sum
// as a bonus modify it so that it can accept an array and do the same thing
//by levance wamley jr

function sum(...args) {
    if (Array.isArray(args[0]))
        return args[0].reduce((a, b) => a + b);
    return args.reduce((a, b) => a + b);

}

console.log(sum(1, 2, 3, 4));

// better way
function result(...args) {
    if (args.length === 1 && Array.isArray(args[0]))
        args = [...args[0]]
    return args.reduce((a, b) => a + b);

}

console.log(sum([1, 2, 3, 4, 5]));