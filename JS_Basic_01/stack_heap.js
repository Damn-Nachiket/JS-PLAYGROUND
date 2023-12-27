//Stack (Premitive) | Heap (Non-Premitive)

// Example of Stack Memory
let myGithubId = "Damn-Nachiket"
let anotherId = myGithubId
anotherId = "Alpha"

console.log(myGithubId);
console.log(anotherId);

//Example of Heap Memory
let userOne = {
    email:"nnn@gmail.com",
    upiId:"user@ibl",
}

let userTwo = userOne

userTwo.email = "aaa@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);