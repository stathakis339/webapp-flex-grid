const express = require('express'); // we created a variable and assigned the package/library 
const app = express();
const port = 3000; // where will be run our server local

//call back funtcion
app.get('/',(req, res) => {    // get request   ('path of route'),(request(req),respond(res)))
    res.send({'test': 'Hello World!'});
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
}); 



