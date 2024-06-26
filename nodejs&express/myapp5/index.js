const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); 

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false})); 

app.get('/create', (req,res)=>{
    res.render('form', {});
})

app.post('/user', (req, res)=>{
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;

    console.log(firstname,lastname);
    res.render('user', {
        name: firstname,
        surname: lastname
    })
})

app.listen(port, ()=>{
    console.log(`Server is listening in port ${port}`);
})

