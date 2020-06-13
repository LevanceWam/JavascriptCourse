// Exercise
// Design a stopwatch obj
// when we define a new const and set it to stopwatch
// in that stopwatch we have a few members 
// duration this is a property
// reset method
// start method
// stop method

// intitally duration is 0
// we can start the watch
// it we do it again it will throw an error

// we can call stop but just like start if it already is at stop
// yell at us

// when we call duration after stop it should show us the seconds that have passed 
// reset sets us back to 0

function Stopwatch() {
    // defined  private variables 
    let startTime, endTime, running, duration = 0;

    this.startTime = function () {
        // this is our validation check if the stopwatch is running then it will throw this error.
        if (running)
            throw new Error('Stopwatch has already started');

        // if the stop watch is not running then we set it to true 
        running = true;

        // we set the time to current date time 
        startTime = new Date();
    };
    this.endTime = function () {
        if (!running)
            throw new Error('The stopwatch is not running');

        running = false;

        endTime = new Date();

        // now we calculate the the seconds between endtime and starttime
        // this expression returns the milliseconds between these 2 date obj
        // we divide them by 1000 to get the seconds then we add that to the duration
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };
    this.reset = function () {
        // here we are setting the variable to the intial value 
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    // this is a read only property that returns the duration
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}