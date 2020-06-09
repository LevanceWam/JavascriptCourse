// lets create a function to calculate total interest

function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}
console.log(interest(10000, 3.5, 5));

// now what if we wanted to have default values for the parameters 
// we defined?

function interest2(principal, rate, years) {
    // so if rate has a value we will use that 
    // if it doesn't we will use the number we defined 
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}
console.log(interest2(10000));

// But with ES6 we have a better way of doing this
// there is on e caveat here 
// if we set a default value anything after it a value also
// so for best practice when we have to use default values
// either make sure that if one parameter has a default value 
// the ones behind it aslo have one or it is the last parameter in the list
function interest3(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}
console.log(interest3(10000));