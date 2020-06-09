// let's look into keyword 'this'
// 'this' references the object that is executing the current function
// if a function is apart of an obj we call it a method
// so if function is a method in a obj this references that obj
// method -> obj

// otherwise if a function is a regular function
// which means it is not apart of an obj this references the global obj
// which is the window object in browsers and global in node
// function -> global (window, global)

// examples

const video = {
    title: 'a',
    play() {
        console.log(this)
    }
};
video.play(); // this logs out object
// so because play is a method in the video obj 
// this references the object itself

// using the same token we can add another method later in the object
// and get the same result

video.stop = function () {
    console.log(this);
}
video.stop(); // this prints out the video obj also

// let's take a look at the second rule
// A regular function

function playVideo() {
    console.log(this);
}

playVideo(); // when this prints we will see the global obj
//  which is windows in browsers and global in node

// Now what would happen if this was a constructor function.

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('v');
// so instead of a window obj
// we got a new obj


// quick recap
// so when using a regular function 'this' by default references the global object
// but if we call a function using the new operator
// this will reference a new empty obj

// final example

const tapes = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // we want to be able print the title next to the tags
        // if we were too pass this.title it would come back as a global window
        // in order to avoid that we have to pass this as the second parameter in the forEach method
        // by doing this we are referencing the obj and not a window global
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

tapes.showTags();