// implement a function that takes 2 parameters width and height 
//to determine if it is landscape 
// width > height = true
// this is similar to the previous example but we are going to
// learn how to make it a little clearer
// when using ternary if we want to find out if a condition is true or false 
// we can just write the condition and return it 

function isLandscape(width, height) {
    return (width > height);
}

let photo = isLandscape(3, 2);
console.log(photo)