const my_list = [7, 2, 4, 6, 8, 9, 1];

for (let i = 0; i < my_list.length; i++) {
    for (let j = 1; j < my_list.length; j++) {
        if (my_list[j] < my_list[j - 1]) {
            let temp = my_list[j];
            my_list[j] = my_list[j - 1];
            my_list[j - 1] = temp;
        }
    }
}