// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise ,
// they are a silver customer.

let points = 101;
let type = points > 100 ? 'gold' : 'silver'; // ternary operator
// if points remain higher than 100 it will print out gold if lower t
// then silver

console.log(type);