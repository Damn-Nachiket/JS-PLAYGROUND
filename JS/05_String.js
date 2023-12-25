// const name = "Brother"
// const repoCount = 20

//console.log(name + repoCount + "Hello"); Not industry level syntax

// console.log(`Hello ${name} your repoCount is ${repoCount} . Thank You `); // Modern Syntax , String Interpolation

const gameName = new String ("Nachi-ket") // This is object created string , which works with key and value.

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const subString = gameName.substring(0,5)
console.log(subString);

const sliceString = gameName.slice(-8,4)
console.log(sliceString);

const trimString = "    hello   "
console.log(trimString);
console.log(trimString.trim());

const replaceString = "https://google.com/user%20islive"
console.log(replaceString.replace('%20' , '-'))