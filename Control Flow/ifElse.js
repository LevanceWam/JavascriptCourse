// Hour
// If hour is between 6am and 12pm: good morning 
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!
let hour = 12;
// condition to run the code.
if (hour >= 6 && hour < 12)
    // code that is executed if condition was met.
    console.log("Good morning!");
else if (hour >= 12 && hour < 18)
    console.log("Good Afternoon!");
else
    console.log("Good Evening");