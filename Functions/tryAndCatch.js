// try and catch
// this is an example from the previous file
// we should try to do error handling at the beginning of a function
// or method this is called defensive programming

const person = {
    firstName: 'Cactus',
    lastName: 'Jack',
    set fullName(value) {
        if (typeof value !== 'string') //return; //this will print the default we have already
            // but sometimes we want to report the error 
            // this is where we need to throw an expection
            // so instead of the return we had up there lets do this
            // error is a constructor function
            throw new Error('Value is not a string');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lasttName = parts[1];

    }
};

try {
    person.fullname = '';
} catch (e) {
    // this is a very old and poor way of reporting errors to users.
    // the proper way is to display a label on the user interface
    // but for this example we will use this 
    alert(e);
}
console.log(person);