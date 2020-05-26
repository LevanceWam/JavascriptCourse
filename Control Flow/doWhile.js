// do while loops aerre similar to while loops just a little different
// do while loops are always executed once even if the condition results in a false
// the condition is executed at the end

// for loop
for (let i = 0; x <= 5; x++) {
    if (i % 2 !== 0) console.log(i)
}

// while loop
let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log(i)
    i++;
}

// do-while
let j = 0;
do { // this goes first
    if (j % 2 !== 0) console.log(j)
    j++;
} while (j <= 5); // then checks this