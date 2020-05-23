// create a function that takes a parameter and counts up to that number
// also it should be able to tell if the number is odd or even

// my attempt
function showNum(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i, 'ODD');

        // cleaner version
        const mess = (i % 2 === 0) ? 'Even' : "Odd";
        console.log(i, mess);
    }
}

showNum(20);