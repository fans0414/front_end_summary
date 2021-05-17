var obj = {
    0:'a',
    1:'b',
    2:'c',
    3:'d',
    4:'e',
    5:'f',
    length:6
}
let newArray = Array.from(obj,function(value,index){
    console.log(value,index,this,arguments.length);
    return value.repeat(3)
},window)
console.log(newArray);