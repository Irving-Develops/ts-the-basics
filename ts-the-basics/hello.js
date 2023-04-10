// console.log("hello world")
var msg = "hello world";
function greeting(person, date) {
    console.log("hello ".concat(person, ", today is ").concat(date.toDateString()));
}
greeting("irving", new Date());
//any allows you to use any datatype
var obj = {
    x: 0
};
obj.foo = "hello";
obj.func = greeting;
obj.bool = true;
// function greet(person: string) {
//     console.log(`hi ${person}`)
// }
//return type goes after parameter
function getFavNumber() {
    return 7;
}
getFavNumber();
//doesnt work because toUpperCaseUpperCase doesnt exist for numbers
function printId(id) {
    // console.log(id.toUpperCase())
}
function coordinates(pt) {
    return pt.x + pt.y;
}
coordinates({ x: 12, y: 23 });
var canvas = document.getElementById("main-canvas");
