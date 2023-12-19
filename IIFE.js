// Immedietly invoked function expression (IIFE)

// function mummi(){
//     console.log("DB connected")
// }
// mummi()


(function mummi(){
    console.log("DB connected")
})();



// do IIFE likhne ke liye pahle wale ke baad semicolon laga dete hain 

( () => {
    console.log(`DB connected two ${name} `);
})('rinka')




