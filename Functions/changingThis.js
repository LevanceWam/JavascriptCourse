// changing this
// reminder that 'this' references the obj that is 
// executing the current function

// lets look at some ways to change the value of this in a function
// this is an example from the previous file.
const video = {
    // we removed the this from the second parameter in the foreach 
    // 1st solution
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // before the each method let's create a new variable
        // self is referencing the video obj
        // this is not a preferred approach 
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    }
};
// video.showTags();

// remember that functions are objects in JS 
// because it is an object it has properties and methods that we can access
// using dot notation
// the 3 methods:
// apply()
// bind()
// call will help us change the value of this or this function
function playVideo() {
    console.log(this);
}

// the simplest is the call method
// call()
// the first parameter is called thisArg,
// Here we can pass an object and 'this' will reference that object
// with the call method we can supply multiple arguments
playVideo.call({
    name: 'jack' //we should see this object in the console
}, 1, 2);
// compared to calling the function by standard function call syntax
// playVideo(); //this references the window object

// apply()
// this is very similar to the call method above
// the difference between the call and apply is only about passing arguments
// with apply we have to pass an array
playVideo.apply({
    name: 'jack'
}, [1, 2]);

// bind()
// this doesn't not call our play video function
// it returns a new function and sets 'this' to point this object permanently
// no matter how we call the function this will ALWAYS point to the object we are passing
// since we are returning a new function let's store the result in a constant
const fn = playVideo.bind({
    name: 'cactus'
});
fn();

// we also don't need to store it in a constant
// we can immediately call the function that is returned 
playVideo.bind({
    name: 'cactus'
})(); // gives us the same result


// copying the example on the top to modify it 
// using the bind method is our second solution to fixing our problem
const videos = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // we aren't going to use self
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
            // using bind and this to reference the obj
        }.bind(this));
    }
};
videos.showTags();

// Third solution
// starting from ecma script 6 we have a arrow function
// awesome thing about arrow functions is that they inherit
// the this value

// trying this with a arrow function
const vids = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // first get rid of the keyword function
        // this now does the same thing as the code above 
        // the reason for this is because arrow functions inherit this from the 
        // containing functions.
        // to break it down further 
        // this references the vid object
        // so when we pass the arrow function here
        // the same value is used in this arrow function
        // in other words it is not rebound to a new object
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};
vids.showTags();

// Recap 
// there are three ways to change the value of this
// the first solution is the (self) approach (not best practices try to aviod)
// the second solution was to use the bind method this way is a little bit noisy
// finally we have the arrow function solution 