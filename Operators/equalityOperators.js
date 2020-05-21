// Strict Equality (Type + value)
console.log(1 === 1); // this comes out as true
console.log('1' === 1); // this comes out to be false because we are comparing a string to a number

// Loose Equality
console.log(2 == 2); // this comes out to true
console.log('2' == 2); // this will come out to true
/*
 what is happening above is this 
The operator is looking to the value on the left and is 
converting the type of the value on the right to match 
the value on the right.
So the 2 on the right is converted to a string and 
is then compared to the one on the left.
*/
console.log(true == 1);

/*
important take aways from here is that the strict
equality operator makes sure that both values have the same type 
and same value.

The loose equality operator doesn't care about the types not matching
if the types don't match then it will convert the type of what we have 
on the right side to match what we have on the left and then check the values
*/