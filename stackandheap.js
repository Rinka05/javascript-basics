//stack(primitive) heap(non-primitive)

// in stack values are modified at same address and in heap
// values are modified by reference 

// for primitive datatypes 
let myname = "rinkayadav";
let anothername = myname;
anothername = "rinkaandmomos";


console.log(myname);
console.log(anothername);


// for nonprimitive datatypes

let userone = {
    email : "userone@gmail.com",
    upi : "userone@ybl"
}

let usertwo = userone;
usertwo.email = "rinka@gmail.com";
console.log(userone.email);
console.log(usertwo.email);



//o/p

// rinkayadav
// rinkaandmomos
// rinka@gmail.com
// rinka@gmail.com




