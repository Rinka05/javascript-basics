let account = "12345rinka"
var accountid = "rinka@os.com"
const acountname = "2324";

// const values will not be changed anyway they will throw error 

// acountname = "9087";

// console.table will print all the values of the variables in table that is being printed 
console.log(account);
console.log(accountid);
console.log(acountname);
//or
console.table([account , accountid, acountname]);



// const is used to assign constant values which can not be changed at any point
// var is not a good practise because it does not support function scope 
// let is best practise to assign variables which supports functional scoping 



// values which are only intialissed and not assigned any values will be undefined when we try to console it 