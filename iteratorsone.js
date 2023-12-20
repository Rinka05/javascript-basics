
const arr = [1, 2, 3, 4, 5, 6]
// for of 

for (const num of arr) {
    console.log(num)
}


//Maps            // contains no duplicate values

const map = new Map();
map.set('nit' , "national institute")
map.set('r' , "rinka")
map.set('s' , "shashank")

console.log(map)

for (const [key  , value ] of map) {
    console.log(key , ':-' , value);
    
}


// objects are not iteratable like this key valee pairs


// for in loop is used

const myob ={
    js : "javascript",
    c:"c++",
    swift :"swift by apple"
}

for (const key in myob) {
    console.log(`${key} shortcut for ${myob[key]}`);
}



//for each 

const coding = ["js" , "c++" , "java" , "html" , "ruby"]
coding.forEach(function (item) {
    console.log(item)
})
//or
coding.forEach((item) =>{
    console.log(item)
})

