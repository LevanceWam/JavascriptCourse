// Value vs Reference Types
// primitive types

let x = 10;
let y = x;

x = 20;

// if we were to print this out x will be the only one that changes
// y is indepedent of x so what ever was stored in y stays

let z = {
    value: 10
};
let w = z;

z.value = 20;

// the value of w will change because the object is not stored in the variable
// stored in the memory the address of the memory is stored in the variable
// so when we copied z to w it took the address for z and placed it in w

// take away primitive are copied by their value 
// objects are copied by their reference

// more examples
let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number); // this will come out to 10
// this is because the parameter number is independent of the number variable we have that is global


let obj = {
    value: 10
};

function inc(obj) {
    obj.value++;
}

inc(obj);
console.log(obj); // this will return 11

// the reason for this is because when we called increase and pass the obj
// the obj is being passed by its reference.
// so the local parameter that we have in the function is pointing to the same obj
// that we defined globally