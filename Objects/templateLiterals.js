// String primitive
// this is very noisy and we can't see how it will look in the console
const name = 'jack';
const message =
    'this is my\n' +
    '\'first\' message';

// this is where template literals come into play
// object literal {}
// boolean literal true, false
// string '', ""
// with es6 we now have 
// Template ``

const another = `This is my
first message`;

// with ` we do not need escape chars
// this is really good for sending emails
// we can add place holders

const another1 =
    `Hi ${name},

Thank you for joining my mailing list.

Regards,
Cactus`;

console.log(another1);