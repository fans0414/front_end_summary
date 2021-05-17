function Person(uname){
    this.uname = uname;
    // console.log(this);
}
Person.prototype.sayHi = function(instance){
    // this.tel = 123;
    console.log(this === instance);
    // console.log(this === Person);
    // console.log(this === Person.prototype);
}
let p1 = new Person('LiuXiangWei');
p1.age = 18;
p1.sayHi(p1);
let p2 = new Person('Sun');
p2.sayHi(p2);