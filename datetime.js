let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toLocaleDateString())

// Tue Dec 19 2023 06:16:41 GMT+0530 (India Standard Time)
// 19/12/2023

let mytimestamp = Date.now();
//in ms
console.log(mytimestamp);


console.log(Math.floor(Date.now()/1000));

let newdate = new Date();
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());



newdate.toLocaleString('default' ,{
  weekday: "long"
})

