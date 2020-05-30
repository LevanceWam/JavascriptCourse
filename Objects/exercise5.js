// Scenario
// We are building a blogging engine
// the user is drafting a post and they didn't publish it yet
// make what you think the constructor function will look like 


const post = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 3,
    comments: [{
            author: 'l',
            body: 'd'
        },
        {
            author: 'w',
            body: 'u'
        },
    ],
    isLive: true
}

// my attempt

function Post(title, body, author) {
    this.title = title,
        this.body = body,
        this.author = author,
        this.views = 0,
        this.comments = [],
        this.isLive = false

}

const draft = new Post('a', 'b', 'c');
console.log(draft);