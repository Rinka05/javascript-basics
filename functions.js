
function saymyname(){
    console.log("R")
    console.log("i")
    

}
saymyname();


function addtwo(num1 , num2){
    console.log(num1*num2);
}

addtwo(2 , 3);

function loginusermessage(username){
    if(username===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in `
}

console.log(loginusermessage("shashank"));


//...rest operator 
// function calculateprice(...num1){
//     return num1
// }


function calculateprice(val1 , val2 ,...num1){
    return num1
}


console.log(calculateprice(200 , 300 , 400))

const user ={
  username:"rinka",
  price:88
}
function handleobject(user){
    console.log(`username is ${user.username} and price is ${user.price}`);
}

handleobject(user);




const addt = (num1 , num2) => (num1 +num2);
// return ki jarurat nhi pdti in arrow function when we use paranthesis
