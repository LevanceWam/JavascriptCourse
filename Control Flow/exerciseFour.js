// write a function that checks the users speed
// speed limit = 70
// 5mph over the limit = 1 point
// 12 points = suspended
// use floor to deal with decimals

// My attempt
function checkSpeed(speed) {
    if (typeof speed !== 'number') return NaN;
    if (Math.floor(speed) <= 74) return 'Ok';
    if (Math.floor(speed) >= 75) {
        let point = Math.floor((speed - 70) / 5);
        if (point >= 12) return 'License Suspended.';
        else return 'points: ', point;
    }
}

let result = checkSpeed(200.6);
console.log(result);

// A cleaner version
// in this version we get rid of the magic numbers so if 
// another developer comes behind us and looks at our code they can 
// understand what is going on.
function CheckSpeed(speed) {
    const speedLimit = 70;
    const mphOver = 5;

    if (speed < speedLimit + mphOver) {
        console.log('Ok');
        return;
    } else {
        const points = Math.floor((speed - speedLimit) / mphOver);
        if (points >= 12) console.log('License Suspended');
        else console.log('Points: ', points);
    }
}

CheckSpeed(200.6)