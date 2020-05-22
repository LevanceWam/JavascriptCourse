// The difference between a while and for loop is that in for loops is that
// the loop variable is part of the loop variable itself
// In while loops we have to declare the variable externally

for (let x = 0; x <= 5; x++) {
    if (x % 2 !== 0) console.log(x)
}

//this variable of i is different the the i inside of the for loop due to scope
let i = 0;
// write a condition
while (i <= 5) {
    if (x % 2 !== 0) console.log(x)
    i++;
}

// the while loop above is doing the same thing as the for loop above.
// So this is what is going on inside of the while loops
// the while loop first looks at the condition and then executes the code.
// once it finishes it stops and looks at it again
// of the condition has not been met ot will run again.