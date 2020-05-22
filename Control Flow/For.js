// for loops are made up of the following
// initial expression, condition, incrementing Expresssion
// the loop starts with an index of 0
// the loop will execute as loop as the initial expression and condition are both true.


for (let i = 0; i <= 5; i++) {
    console.log('Hello World', i);
    // let's make a for loop that counts the odd numbers
    if (i % 2 > 0) console.log(i);
    if (i % 2 !== 0) console.log(i);
}


for (let i = 5; i >= 1; i--) {
    console.log('Going Backwards', i);
    if (i % 2 > 0) console.log(i);
    if (i % 2 !== 0) console.log(i);
}