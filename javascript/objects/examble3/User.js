const {readFileSync, writeFileSync } = require('fs');   //call fs , bring me readFileSync,writeFileSync //const json = require('./data.json');   Imports the contents of a JSON file

module.exports.showOne = function(username) {
    let results = readFileSync('data.json','utf-8');     // Read
    let users = JSON.parse(results);                  // Return object
    //console.log(user.data);
    let user = users.data.find(val=>val.username === username);  // Data(KEY), find and show user4 details, (find=return element  and filter=[element] )

    return user;
}

module.exports.showAll = function() {
     results = readFileSync('data.json','utf-8');
     return JSON.parse(results);                      // It will show the names from the data array
}

module.exports.remove = function(username) {
    let results = readFileSync('data.json','utf-8');  //We read contents of json
    
    let json = JSON.parse(results);                   //Do parse(string to object) the result and put it variable json  
    
    json = json.data.filter(function(val){
        return val.username!==username;               //Filter, return back and create a new array without the val.username i choosed
    })

    json = {                                           //Form
        "data":json
    }
    
    try {
        writeFileSync('data.json', JSON.stringify(json)); // {flag:'a+'}
        return { status:true, values: username }
    } catch (err){
        confirm.log(err);
        return { status:false, values: username}
    }
}