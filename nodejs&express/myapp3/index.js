const express = require('express');
const app = express();
const port = 3000;

app.get('/user',(req,res) => {
    console.log(req.query);
    let name = req.query.name;
    let surname = req.query.surname;

    res.send('Name: ' + name + ', Surname: ' + surname);
});

app.get('/user2/:name/:surname',(req,res) => {
    console.log(req.params);
    let name = req.params.name;
    let surname = req.params.surname;

    res.send('Name: ' + name + ', Surname: ' + surname);
});

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`);
});