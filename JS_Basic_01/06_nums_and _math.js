const score = 400
console.log(score);

const balance = new Number(200) //Specially provide Number datatype to value
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 23.98665 //123.8966

console.log(otherNumber.toPrecision());

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// In console write : Number.(all function will appear) Search them anf learn them for DSA

//__________________Maths________________________

console.log(Math); // Write In console
console.log(Math.abs(-4));//Negative to positive
console.log(Math.round(4.3));// Roundof Value
console.log(Math.ceil(4.2));//Output : 5
console.log(Math.floor(4.2)); //Output : 4
console.log(Math.min(4,3,5,6,1)); //Find the min value from array

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min )