// intialize an address object 
// first using a factory function
// then using constuctor 
// by Levance Wamley Jr

// My Attempt 
// factory function
function createAddress(street, city, zip) {
    return {
        street,
        city,
        zip
    }
}

const newAddress = createAddress(1, 2, 3);
console.log(newAddress);

// constructor function
function ShowAddress(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}

const another = new ShowAddress(4, 5, 6);
console.log(another);