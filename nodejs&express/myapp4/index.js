const express = require('express');
const app = express();
const port = 3000;

const bodyParse = require('body-parser'); // variable with the properties of body-parser library, 
                                          // bodyParse read a http request from browser or a app 
                                          // form multipart (upload archives) , form type text
app.use(bodyParse.json());                // the fields of the form will have a json form (object  field: key:value)
app.use(bodyParse.urlencoded({ extended:false }));  // x-www-urlencoded utf-8 (default forms)
//app.use('/user', ()=>{})

app.get('/user',(req,res) => {
    console.log(req.query);
    let name = req.query.name;
    let surname = req.query.surname;

    res.send('GET>>>  Name: ' + name + ', Surname: ' + surname);
});

app.get('/user2/:name/:surname',(req,res) => {
    console.log(req.params);
    let name = req.params.name;
    let surname = req.params.surname;

    res.send('Name: ' + name + ', Surname: ' + surname);
});

app.post('/user', (req, res) =>{         // we have post call , they sent us variables and it shows us
    console.log(req.body);

    let name = req.body.name;
    let surname = req.body.surname;

    res.send ('POST>>>  Name: ' + name + ', Surname: ' + surname);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
