
// this is the current context
// arrow function me this keyword nhi chlta 

const user = {
    username: "rinka",
    price: 555,
    welcomemessage: function(){
        console.log(`${this.username}  welcome to my website`)
        console.log(this)
    }
}
user.welcomemessage()
user.username = "shashank"
user.welcomemessage()


// in node environment this refers to the null object

// console.log(this)



function funone(){
    console.log(this)
}
funone()


// this keyword only works in objects and not in functions 
//e.g

function funtwo(){
    const username = "aastha"
    console.log(this.username)
}
funtwo()    // undefined


const func = () =>{
    let username = "mummy";
    console.log(this);
}

func();