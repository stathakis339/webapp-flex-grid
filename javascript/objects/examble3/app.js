const { showOne, showAll, remove } = require('./User.js');


//const data = json.data;               // Extract "data" and assign it to a new variable called data

const args = process.argv;            //The process.argv array contains command-line arguments passed to the Node.js script. Args will hold an array of command-line arguments

// console.log(args);                    // Prints the entire args array to the console

let command = args[2];                // Extract the third argument and asign it the command varieble
let values = args[3];

let results = ``;

switch(command){
  case'crate':
    console.log('Create');
    break;
  case'delete':
    results = remove(values);
    if (results.status) {
      console.log("Succesfull deleted user", results.values);
    } else {
      console.log("Problem in deleting user", results.values);
    }
    break;
  case'update':
    console.log('Update');
    break;
  case'showOne':
    results = showOne(values);
    console.log(results);
    break;
  default:
    results =showAll();
    console.log(results);
  }
