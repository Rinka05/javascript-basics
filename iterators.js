
// for 
let Arr = [1 , 2 , 3, 4 ,5 ,6 , 6]
for (let index = 0 ; index< Arr.length ; index++){
    const element = Arr[index];
    console.log(element);
}


// same as c++ re 

// break and continue 

for (let index = 0 ; index<=10 ; index++){
    if(index ==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
}


let index = 0;
while(index <= 10){
    console.log(`value of index is ${index}`);
    index = index+2;
}


let myarray = ['flash' , 'batman' , 'superman'];
let arr = 0 ;
while(arr < myarray.length){
    console.log(`value is ${myarray[arr]}`);
    arr++;

}


let score = 1;

do {
  console.log(`score is ${score}`);
  score++;
}while(score <=10)



