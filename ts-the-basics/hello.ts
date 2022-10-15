// console.log("hello world")
let msg = "hello world"

function greeting (person: string, date: Date){
    console.log(`hello ${person}, today is ${date.toDateString()}`)
}

greeting("irving", new Date())