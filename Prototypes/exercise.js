// get all methods and move them to the prototype
// once on the prototype this will lead to an issue
// the variables we defined towards the top will not work 
// this is because they are within the scope of the function
// so once we put the methods on the prototype 
// it can only access the public memmbers of the stopwatch
// in order to access the private variables we are going to have to 
// define the variables as a read only property on the stopwatch and access it using this

// Remember this principle your objects should always be in a valid state

// my attempt
// this works but I assume there is a better way to do this 
function StopWatch() {
    let startTime, endTime, running, duration = 0;
    this.duration = duration;

};

StopWatch.prototype.start = function () {
    if (this.running)
        throw new Error('Already Running');

    this.running = true;
    this.startTime = new Date();
}

StopWatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Not Runnning');

    this.running = false;
    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
}

StopWatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}

const sw = new StopWatch();

// Another Way
function Stopwatch2() {
    let startTime, endTime, running, duration = 0;
    // we have to pollute the object in order to make the other values read only
    // this goes against the rule of abstraction 
    // where we would want to hide the unnessacry things from the users
    // and only use the main parts of the function

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
        // this helps solve the problem of not getting the value to change
        // but it brings up another issue
        // the reason this is a terrible idea is because now we can modify the duration from the outside
        // this puts our object in a bad state!
        // Remember this principle your objects should always be in a valid state
        set: function (value) {
            // so we create a function to take a value and set duration to the value
            // now we can gain access to the duration property and change its value down in the stop method
            // same with reset
            duration = value
        }
    });

    // we defined starttime and exposed it to the prototype 
    Object.defineProperty(this, 'startTime', {
        get: function () {
            // now we return it
            return startTime;
        }
    });
    Object.defineProperty(this, 'endTime', {
        get: function () {
            return endTime;
        }
    });
    Object.defineProperty(this, 'running', {
        get: function () {
            return running;
        }
    });

};

// we have all the methods on the prototype
Stopwatch2.prototype.start = function () {
    // as we can see running was not defined anywhere in the program 
    // so we need to define it as a read only property
    // this is a problem because this is going to pollute the interface of the stopwatch
    if (this.running)
        throw new Error('Already Running');

    this.running = true;
    this.startTime = new Date();
}

Stopwatch2.prototype.stop = function () {
    if (!this.running)
        throw new Error('Not Runnning');

    this.running = false;
    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    // this was a trick situation
    // this is because duration was a public read only property
    // so adding this right away wouldn't let us modify it
    // and the reason we can't also do that is because we dont have a setter 
    // (look to the setter above)
    this.duration += seconds;
}

Stopwatch2.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}

const sw2 = new Stopwatch2();

// Remember this principle your objects should always be in a valid state
// we do not want our objects to lie
// we do not want them to be unreliable and untrustworthy
// this is why we use abstraction to hide the unnecessary complexity and expose 
// very few members that would allow the clients of an object to work
// with it without messing up the state

// this exercise was designed so we can see that sometimes
// we make some changes to our code for optimization reasons 
// but we end up creating a lot more issues 

// with this program we didnt have any performance problems and we knew we werern't
// going to need a plethora of instances of stopwatch in the memory
// so putting all of these methods on the prototype was a bad idea to begin with
// it broke the abstraction rule and now we are exposing our 
// duration property and now it can be modified from the outside 
// now the stopwatch object is useless

// "Premature optimization is the root of all evils"
// this is an example of that 