console.log('Your code goes here...');

function add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;


const res = add(number1, number2);
console.log(res);


const person: {
    name: string;
    age: number;
    hobbies: string[] | string;
} = {
    name: "irving",
    age: 24,
    hobbies: ["sports", "cooking"]
}