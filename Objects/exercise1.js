// create an address obj that has 3 properties
// street
// city
// zip code
// then create a function called showAddress 
// that takes an address object and displays 
// all the properties and values

const griffinAddress = {
    street: '31 Spooner Street',
    city: 'Rhode Island',
    zipCode: 28496
};

function showAddress(obj) {
    for (let info in obj) {
        console.log(info, obj[info]);
    }
}

showAddress(griffinAddress);