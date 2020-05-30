// object Equality
// create 2 functions
// first is areEqual
// We pass 2 address objects to see if the 2 objects are equal
// so if all the properties of both objects are equal it should come out true
// second is areSame
// this tells us if address1 and 2 are pointed at the same exact object
// in other words are they referencing the same object


let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

// constructor function
function Address(street, city, zip) {
    this.street = street,
        this.city = city,
        this.zip = zip
}

// My attempt
// First function
function areEqual(address1, address2) {
    for (let key in address1) {
        if (address1[key] === address2[key])
            console.log(true);
        else console.log(false);

    }
}

areEqual(address1, address2);


// Second Function
function areSame(address1, address2) {
    if (address2.constructor === Address && address1.constructor === Address)
        console.log(true);
    else
        console.log(false);

}

areSame(address1, address2);

// correct answers
// my function  was correct could have written it a different way
// function 2 I didnt understand what he was asking but did something cool 

function Areequal(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zip === address2.zip;
}

console.log(Areequal(address1, address2));

function Aresame(address1, address2) {
    return address1 === address2
}

console.log(Aresame(address1, address2));

// so what happen was this
// in areequal all of the properties matched up and was the same which gives us true
// but in aresame they are not because they are not referencing the same object this gave us false
// they are calling different objects in memory
//  if we created a address3 that referenced address1 it would be true