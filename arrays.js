// A shallow copy of an object is a copy whose properties share the same references 
// (point to the same underlying values) as those of the
//  source object from which the copy was made. As a result, when you change either the source or the copy,
//   you may also cause the other object to change too. 


const myarr = [0 ,  1, 2 ,3 ,4];
const myhero = ["apjabdul"  , "indiragandhi" , "papa"];

const myarrone = new Array(1 , 2, 3, 4);
console.log(myarr[1]);

//array methods

myarr.push(5 ,6);
myarr.push(7);

myarr.pop();

// console.log(myarr.includes(80));
// console.log(myarr);

const newarr = myarr.join();
console.log(typeof(newarr));

//slice
const myn1 = myarr.slice(1 , 3);
console.log("first" , myarr);
console.log(myn1);

const myn2 = myarr.splice(1 , 3);
console.log("second" , myarr);
console.log(myn2);

console.log(myarr);



// splice changes the original array and it includes end range 




const marvelhero = ["thor" , "ironman" ,"spiderman" ];
const dcheros = ["superman" , "flash" , "batman"];

// marvelhero.push(dcheros);
// console.log(marvelhero);


// const hero =marvelhero.concat(dcheros);
// console.log(hero);


const allnew = [...marvelhero , ...dcheros];
console.log(allnew);

// arr.flash   gives sare array jo inside the array hain

