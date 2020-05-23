// break and continue
// they apply to all the loops we have used
// with break you will jump out of loop
// with continue we will jump to the next iteration
//

let p = 0;
while (p <= 10) {
    if (p === 5) break; // this will stop at 5
    // if (i % 2 === 0){
    //     i++;
    //     continue
    // }
    // the continue statement will print all of the odd numbers
    console.log(p);
    p++;
}