const express = require('express');

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hello Express JS!');
});

// GET: /user
app.get('/user', (req, res) => {
    let { firstname, lastname } = req.query;
    if (!firstname || !lastname) {
        firstname = 'Pritesh';
        lastname = 'Patel';
    }
    res.send(`Hello ${firstname} ${lastname}`);
});

// POST: /user
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});