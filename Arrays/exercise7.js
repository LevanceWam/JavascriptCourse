const movies = [{
        title: 'a',
        year: 2018,
        rating: 4.5
    },
    {
        title: 'b',
        year: 2018,
        rating: 4.7
    },
    {
        title: 'c',
        year: 2018,
        rating: 3
    },
    {
        title: 'd',
        year: 2017,
        rating: 4.5
    },
];

// write a code that can find a movie greater than 4
// sort them by their rating 
// descending order
// pick their title and display it on the console
// we should see b ,a 
// Levance Wamley jr

// my Attempt

const movie = movies
    .filter((movie) => {
        return movie.rating > 4 && movie.year === 2018;
    })
    .sort(function (a, b) {
        ratingA = a.rating;
        ratingB = b.rating;

        if (ratingA < ratingB) return 1;
        if (ratingA > ratingB) return -1;

    })
    .map(movie => movie.title);

console.log(movie);

// shorter version

const title = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(title);