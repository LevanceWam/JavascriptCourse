// With switch and case we can compare the value of a variable against other variables.
// They can be numbers, booleans
// booleans are less common because you wouls normally use a if else statement.

let role = 'moderator';

// we put variable we want to compare here.
switch (role) {
    // in here we write the case statement to compare the variable too
    // we have to make sure to add a break so when it finds the match it doesn't 
    // have to go through the other lines of codes.
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');

}
// we can do the code above with if

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User.')