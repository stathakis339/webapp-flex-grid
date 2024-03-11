const fs = require("fs");

try {
  const stuff = fs.readFileSync("skoupidi.txt", "utf8");
  const lines = stuff.split("\r\n");

  var elves = []; 
  var elf = [];

  for (let i = 0; i < lines.length; i++) {
    const element = lines[i];
    if (element != '') {
        const number = Number(element);
        elf.push(number);
    }
    else {
        elves.push(elf);
        elf = [];
    }
  }

  var elvesTotals = [];

  for (let i = 0; i < elves.length; i++) { // [ [1,2] , [3,4] ]
    const elf = elves[i];  // [1,2]
    let total = 0;
    for (let j = 0; j < elf.length; j++) { // [1,2]
        const calories = elf[j]; // 1
        total+= calories;
    }
    elvesTotals.push(total);
  }

  const comparer = (a, b) => b - a; 
  elvesTotals.sort(comparer);

  const solution = elvesTotals[0];

  console.log("Solution:", solution);
} catch (err) {
  console.error("Error reading file:", err);
}

// read the file "skoupidi.txt" -> [[calories1, calories2, calories3],[elf2], [elf3],...]

// find the sum of all calories of each elf
//
