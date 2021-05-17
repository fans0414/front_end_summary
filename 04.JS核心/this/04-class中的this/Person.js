class Person {
    static tel = "022";
    constructor(uname){
        this.uname = uname;
    }
    sayHi(){
        console.log(this);
        console.log(Person.address);
        console.log(Person.tel);
    }
    static create(address){
        this.address = address;
        console.log(this);
    }
}
var person1 = new Person("liuxiangwei");
var person2 = new Person("Sun")
person2.age = 18;
console.log(person2.address);
Person.create('TianJin')
console.log(person2.address);
person1.sayHi();
person2.sayHi();
