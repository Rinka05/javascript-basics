// primitive 

// 7 types : string , number , boolean , null , undefined , symbol , BigInt 


const score = 100;
const scoreval = 100.3;

const isloggedin = false ;
const outsidetemp = null;
let userEmail ;

const id = Symbol("123");
const anotherid = Symbol('123');


console.log(id == anotherid);     //false

const Bignumber = 133333333333333333322222n;
console.log(Bignumber);
console.log(typeof(Bignumber));     //bigint




//Reference (Non primitive )
   // Array , Objects , Functions 


   const heros = ["shaktiman" , "naargraj" , "doga"];

   let myobj = {
        name: "rinka",
        age : 20,

   }

   const myfunction = function(){
       console.log("hello world");
   }
   console.log(typeof(myfunction));   // function
   myfunction();

   