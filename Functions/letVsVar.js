// let's talk about keyword var and why would should avoid using it 

function start() {
    // following the rules of scope this i will not be
    // accessible somewhere else
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

start();

// let's recreate the function using var
function stop() {
    for (var j = 0; j < 5; j++)
        console.log(j);
    console.log(j);
}
stop();
// so j is now accessible outside of for block
// when you declare a variable with var its scope 
// is not limited to the block in which it was defined
// but it will be limited to the function it is defined though

// so before ES6 var was the only way to declare variables and constants
// but starting from ES6(Also known as ES2015)
// we got let, const 
// these 2 keywords create a block-scoped variables
// but var creates function scoped variables

// another example:
function jump() {
    for (var j = 0; j < 5; j++) {
        if (true) {
            var color = 'red';
            // this will be accessible throughout the whole function
            // if we change this to let or const it wil only be accessible to the if block
        }
    }
    console.log(j);
    console.log(color);
}
jump();