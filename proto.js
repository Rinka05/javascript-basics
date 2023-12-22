

var user = function(firstname , coursecount){
    this.firstname = firstname;
    this.coursecount= coursecount;
    this.getcoursecount = function(){
        console.log(`your course count is ${this.coursecount}`)
    };
};


user.prototype.getfirstname = function(){
    console.log(`your first name is ${this.firstname}`)
}
// we can define functions outside the object and they will still be part of the same object 



var rinka = new user("rinka" , 2)
rinka.getcoursecount();
rinka.getfirstname();

var shashank = new user("shashank  " , 12);
shashank.getcoursecount();
shashank.getfirstname();

