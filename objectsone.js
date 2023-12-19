
const regularuser= {
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firsname: "rinka",
            lastname: "yadav"
        }
    }
}
console.log(regularuser.fullname?.userfullname);


// combine objects

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}

// const obj3 = {obj1 , obj2};

const obj3 = Object.assign({}, obj1 ,obj2);
console.log(obj3);


// console.log(Object.keys(regularuser));
// console.log(Object.values(regularuser));



