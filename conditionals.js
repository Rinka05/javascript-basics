const balance = 600;
// if(balance > 500)console.log("test"), console.log("test2");

// bad practise |^

// if 
// else if 
// else

// same logic as we use in c++


const emptyObj = {}

// how to detect if object is empty 
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// false == 0  gives true 
// false == ''

let val1;
// val1 = 5 ?? 10;             //5
val1 = null ?? 10
console.log(val1)




// ternary operator 

// condition ? true :false 

const icetea = 100
icetea <= 80 ? console.log("less than 80"):console.log("more than 80")




/// ?? null coalescens operator 
