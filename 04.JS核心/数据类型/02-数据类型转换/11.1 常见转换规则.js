// console.log("" == null);
// console.log("" == 0);
// console.log([] == 0);
// console.log([] == "");
// console.log([] == ![]);
// console.log(null == undefined);
// console.log(Number(null));
// console.log(Number(""));
// console.log(parseInt(""));
// console.log({} + 10);

let obj = {
    [Symbol.toPrimitive](){
        return 200;
    },
    valueOf(){
        return 300;
    },
    toString() {
        return 'Hello'
    }
}
console.log(obj + 200);