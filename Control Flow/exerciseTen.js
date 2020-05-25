// Create a function where depending on the amount of rows you get a certian amount of stars

function stars(rows) {
    for (let row = 1; row <= rows; row++) {
        // created a string to catch the stars
        let string = 'star count: ';
        for (let i = 0; i < row; i++) {
            // we use the second loop to append the stars to the empty string on the top
            string += '*';
        }
        console.log(string);
    }
}

stars(5);