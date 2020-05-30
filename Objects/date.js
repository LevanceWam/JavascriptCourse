// we are gonna look at the Date object
// Lets look at the different was to write Date 
// date is a constructor function
const now = new Date(); // this returns the current date and time
const date1 = new Date('May 11 2019 09:00'); // this is us passing a string and this is one of the many formats
const date2 = new Date(2013, 3, 23, 9); // passing months // january is 0, 
// order goes year, month, date, hours, minutes

// all of the date objects have a bunch of get and set methods 

now.setFullYear(2017);
console.log(now.toDateString()); // it is 2017 because we declared it 2017 above this code. we get the date 
console.log(now.toTimeString()); // returns the time component of the current obj
console.log(now.toISOString()); // an iso is commonly used in web apps to transfer dates between the client and the server.