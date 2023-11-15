"use strict";
let x = 10;
x = 11;
console.log(x);
const y = 12;
let z = 'casa';
let firstName = "Vinicius";
let age = 18;
const isAdmin = true;
console.log(typeof firstName);
firstName = 'João Silveira';
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTupie;
myTupie = [5, "teste", ["a", "b"]];
console.log(myTupie);
const user = {
    name: 'Vini',
    age: 18
};
console.log(user);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
let userId = 10;
userId = "1234";
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E8dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.G
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Vinicius"));
function logger(msg) {
    console.log(msg);
}
console.log(logger("Uma mensagem qualquer"));
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("josé", "Sr");
greeting("Pedro");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info == "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(false);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`O item é ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
