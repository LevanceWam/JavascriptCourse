// Rest Operator
// in modern JS if you want to have a function with
// a varying number of parameters we would use the rest operator

// this is from the previous file
function sum() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

// console.log(sum(1, 2, 3, 4, 5));

// lets make it under here to compare the 2
// first we are going to add a parameter
// we are then going to prefix it with ...
// this is how we make a rest operator
// be careful not to confuse this with the spread operator
// remember that spread is used to copy one arrays element and put it into another array
// we are not doing that here 
// by prefixing the parameter with ... 
// we can now pass a varying amount of arguments through a function
// we can not have another parameter after the rest operator
function result(...args) {
    console.log(args); // this returns an array
    // if we where to remove the ... it would only print out 1 argument because the function will see it as 1 parameter
    // now we can use the reduce method to get the sum of the array
    return args.reduce((a, b) => a + b);
}
console.log(result(1, 2, 3, 4, 5));

// let's take this to the next level 
// let's say that we have a shopping cart full of items 
// let's try to calculate the cost all the items in the cart
// lets also add a discount
// we can not have another parameter after the rest operator

function price(discount, ...items) {
    const total = items.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(price(0.1, 20, 30));

// recap 
// the rest operator is a function parameter prefixed with (...)
// the reason why we call this the rest operator is because
// we can have 0 or more parameters before this 
// and rest will run the of arguments on the function
// we can not have another parameter after the rest operator
// the rest operator has to be last 