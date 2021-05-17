"use strict"
function foo(){
    console.log('this指向',this);
    console.log(this === global);
}
foo();