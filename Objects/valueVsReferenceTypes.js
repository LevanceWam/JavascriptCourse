// In javascript we have 2 catergories of types.
// On one side we have value types also known as primitives.
// on the other side we have reference types.
// look at readme to find out what is in each catergory
// Symbol is new in ES6
// arrays are also objects

// Lets make 2 primitives
// x and y are independent of eachother
let x = 10;
let y = x; // will print 10
x = 20; // will print 20

// Let's see what happens we use a reference type
let l = {
    value: 10
};
let m = l;

l.value = 20;

console.log(l); // logs value 20
console.log(m); // also logs value 20

// takeaway
// when we use an object it is not stored in the variable
// the object is stored somewhere else in the memory
// and the address of the memory location is stored inside the memory variable
// so when we copied l into m it was the address or the reference that was copied
// in short both l and m are pointing to the same object in memory
// and when we modify the object using l or m 
// the changes are immediately visible to the other variable

// In conclusion
// Primitives are copied by Value 
// Objects are copied by their reference

let num = 10;

function increase(number) {
    number++;
}

increase(num); // the num variable in here will increment not the one below
console.log(num); // this will log 10
// when we called the increase function and passed the 
// num variable its value was copied into the parameter that is local to the function.
// so the variable out side of the function is completey 
// indepent of the one inside of the function

// Now lets use a reference type/object

let obj = {
    value: 10
};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj); // we should see 11 now
// the reason for this is because when we call increase 
// and pass the obj this obj is passed by it's 
// reference so the local parameter that we have will point to the same obj 
// that we defined eslewhere
// so in this case we aren't dealing with independent copies
// we have two variables that are pointing to the same 
// obj so any changes made will be visible on both ends