const express = require('express'); // import express library
const app = express(); // create app object
const port = 3000; // set port number

app.use(express.json()); // use express to parse request body

app.listen(port, () => { // run server on specified port
    console.log(`Server running on port ${port}`);
});

let answers = [ // array of answers to pick from
    'yes',
    'no',
    'maybe',
    'ask again later',
    'not a chance',
    'absolutely',
    'never',
    'of course',
    'no way',
    'for sure',
    'i doubt it',
];

app.post('/', (req, res) => { // handle POST request to root route
    let answer = answers[Math.floor(Math.random() * answers.length)]; // pick random answer
    if (!req.body.question) { // if question field is missing
        return res.status(400).send('Please ask a question!'); // send error
    }
    res.status(200).send(answer); // send answer
});