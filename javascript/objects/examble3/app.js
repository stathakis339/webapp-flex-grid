const {readFileSync} = require('fs');   //call fs , bring me readFileSync //const json = require('./data.json');   Imports the contents of a JSON file

//const data = json.data;               // Extract "data" and assign it to a new variable called data

const args = process.argv;            //The process.argv array contains command-line arguments passed to the Node.js script. Args will hold an array of command-line arguments

// console.log(args);                    // Prints the entire args array to the console

let command = args[2];                // Extract the third argument and asign it the command varieble

if ( command === 'showAll'){
  let results = readFileSync('data.json','utf-8');
  console.log(JSON.parse(results));                // It will show the names from the data array
} 

// if (command === `showOne`){
//   results = readFileSync
// }

