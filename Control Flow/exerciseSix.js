// create a function that counts all of the truthy items in a array
// if it is falsy do not count it

const array = [0, null, undefined, '', false, 1, 2, 3];
// my attempt
// got it on the first try! 
function countTruthy(array) {
    let count = 0;
    for (let item of array) {
        if (item) count++;
    }
    console.log(count);
}

countTruthy(array);