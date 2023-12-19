const gamename = new String ('rinkayadav');


// different methods for strings refer mdn or any doc
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());

// r
// {}
// 11
// RINKA-YADAV

const newstring = gamename.substring(0 , 4);
console.log(newstring);


const anotherstring = gamename.slice(-8 , 4);
console.log(newstring);

// rink
// rink



//.replace (from , to)
//.trim(remove spaces in a string)





