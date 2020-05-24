// create a function that shows all of the properties in a obj

// my attempt
const car = {
    brand: 'Dodge',
    model: 'Challenger',
    year: 2019,
    price: 28000,
    color: 'Blue'
}

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(key, obj[key])
        }
    }
}

showProperties(car);