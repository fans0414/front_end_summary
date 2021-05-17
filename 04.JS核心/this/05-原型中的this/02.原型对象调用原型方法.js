function Person(uname){
    this.uname = uname;
}

Person.prototype.sayHi = function(){
    console.log(this);
    console.log(this === Person.prototype);
}
Person.prototype.sayHi();
