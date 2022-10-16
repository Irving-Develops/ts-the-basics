// console.log("hello world")
let msg = "hello world"

function greeting (person: string, date: Date){
    console.log(`hello ${person}, today is ${date.toDateString()}`)
}

greeting("irving", new Date())

//any allows you to use any datatype

const obj: any = {
    x: 0
}

obj.foo = "hello"
obj.func = greeting
obj.bool = true



// function greet(person: string) {
//     console.log(`hi ${person}`)
// }


//return type goes after parameter
function getFavNumber(): number {
    return 7
}

getFavNumber()

//doesnt work because toUpperCaseUpperCase doesnt exist for numbers
function printId (id: string | number) {
    // console.log(id.toUpperCase())
}