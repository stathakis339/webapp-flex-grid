const express = require('express');
const app = express();
const port = 3000;

app.get('/about', (req, res) => {
    console.log("About request");
    res.send('This is the about page');
});

app.get('/login', (req, res) => {
    console.log("Login request");
    res.send('This is the login page');
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
});