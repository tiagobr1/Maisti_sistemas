const PromptSync = require("prompt-sync")();
const prompt= PromptSync

let email = prompt('digite seu email: ');
let arreyEmail = [];

for(let i = 0; i <= email.length ; i++){
    arreyEmail.push(email[i])
}
console.log(arreyEmail)
let regx1 = arreyEmail.slice(0,arreyEmail.indexOf('@'))
console.log(regx1);