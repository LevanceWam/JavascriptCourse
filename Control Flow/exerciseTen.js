// Create a function where depending on the amount of rows you get a certian amount of stars

function stars(rows) {
    for (let row = 1; row <= rows; row++) {
        let string = 'star count: ';
        for (let i = 0; i < row; i++) {
            string += '*';
        }
        console.log(string);
    }
}

stars(5);