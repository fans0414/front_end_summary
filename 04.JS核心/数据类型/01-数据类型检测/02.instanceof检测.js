let Car = function(){}
// let benz = new Car();
// console.log(benz instanceof Car);//检测是否是指定类型实例

// let car = new String("北京奔驰")
// console.log(car instanceof String); //检测是否通过指定类型的构造函数创建

// let bmw = "华晨宝马"
// console.log(bmw instanceof String);

function Suv(){}
Suv.prototype = new Car();
let tang = new Suv();
console.log(tang instanceof Suv);
console.log(tang instanceof Car);
console.log(tang instanceof Object);


