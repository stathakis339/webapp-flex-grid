const numbers = [26, 24, 12, 20, 2]

let over20 = numbers.every((val) => val>20)
console.log(over20);

let someOver20 = numbers.some((val)=> val>20)
console.log(someOver20);
