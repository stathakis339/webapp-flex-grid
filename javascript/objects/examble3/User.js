const {readFileSync} = require('fs');   //call fs , bring me readFileSync //const json = require('./data.json');   Imports the contents of a JSON file

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