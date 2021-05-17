function Person(uname){
    this.uname = uname;
    console.log(this);
}

var person1 = new Person("liuxiangwei");
person1.age = 18;
var person2 = new Person("Sun");