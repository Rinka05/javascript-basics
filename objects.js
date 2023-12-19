//object literals


const mysym = Symbol("key1");
const jsuser ={
    name :"rinka",
    age:20,
    [mysym]:"mykey1",
    location : "delhi",
    email:"rinka@gmail.com",
    isloggedin : false,
    lastlogin: ["monday" , "saturday"]
}

console.log(jsuser.name);
console.log(jsuser[mysym]);


jsuser.greeting = function(){
    console.log("hello js user");
}

console.log(jsuser.greeting());

 jsuser.greetingone = function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(greetingone())