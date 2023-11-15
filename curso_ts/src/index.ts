// // annotation
// let x: number = 10;

// x = 11;
// console.log(x);

// // inferencia x annotation

// // iferencia
// const y = 12;

// // annotation
// let z: string = 'casa'

// // tipos basicos
// let firstName: string = "Vinicius"
// let age: number = 18
// const isAdmin: boolean = true

// // string != string
// console.log(typeof firstName)

// firstName = 'João Silveira'
// console.log(firstName)

// // object
// const myNumbers: number[] = [1, 2, 3];
// console.log(myNumbers);
// console.log(myNumbers.length);
// // console.log(myNumbers.toUpperCase()) // error
// console.log(firstName.toUpperCase());

// myNumbers.push(5);

// console.log(myNumbers);

// // tuplas
// let myTupie: [number, string, string[]];

// myTupie = [5, "teste", ["a", "b"]];
// // myTupe = [true, false, true] // error

// console.log(myTupie);

// // object literals => {prop: value}
// const user: { name: string, age: number } = {
//    name: 'Vini',
//    age: 18
// };

// console.log(user);

// // user.job = "Programador" // error

// // any - usado muito raramente
// let a: any = 0;
// a = "teste";
// a = true;
// a = [];

// // union type
// let id: string | number = "10";
// id = 200;

// // type alias
// type myIdType = number | string

// let userId: myIdType = 10
// userId = "1234"


// // enum
// // tamanho de roupas (size: Médio, size: Pequeno)
// enum Size {
//    P = "Pequeno",
//    M = "Mèdio",
//    G = "Grande"
// }

// const camisa = {
//    name: "Camisa Gola V",
//    size: Size.G
// }

// console.log(camisa) // {name: 'Camisa Gola V', size: 'Grande'}

// // literal types
// let teste: "autenticado" | null

// teste = "autenticado"
// teste = null

// // funcoes
// function sum (a: number, b: number) {
//    return a + b
// }

// console.log(sum(12, 12))


// function sayHelloTo (name: string): string {
//    return `Hello ${name}`
// }

// console.log(sayHelloTo("Vinicius"))

// function logger (msg: string): void {
//    console.log(msg);
// }

// console.log(logger("Uma mensagem qualquer"))

// function greeting (name: string, greet?: string) {
//    if (greet) {
//       console.log(`Olá ${greet} ${name}`)
//       return;
//    }
//    console.log(`Olá ${name}`)
// }

// greeting("josé", "Sr")
// greeting("Pedro")

// // interfaces
// interface MathFunctionParams {
//    n1: number,
//    n2: number
// }

// function sumNumbers (nums: MathFunctionParams) {
//    return nums.n1 + nums.n2
// }

// console.log(sumNumbers({ n1: 1, n2: 2 }))

// function multiplyNumbers (nums: MathFunctionParams) {
//    return nums.n1 * nums.n2;
// }

// const someNumbers: MathFunctionParams = {
//    n1: 5,
//    n2: 10
// }

// console.log(multiplyNumbers(someNumbers))

// // narrowing
// // checagem de tipos
// function doSomething (info: number | boolean) {
//    if (typeof info == "number") {
//       console.log(`O número é ${info}`);
//       return;
//    }
//    console.log("Não foi passado um número");
// }

// doSomething(5);
// doSomething(false);

// // generics
// function showArraysItems<T> (arr: T[]) {
//    arr.forEach((item) => {
//       console.log(`O item é ${item}`)
//    });
// }

// const a1 = [1, 2, 3];
// const a2 = ["a", "b", "c"];

// showArraysItems(a1)
// showArraysItems(a2)

// classes
class User {
   name
   role
   isApproved

   constructor(name: string, role: string, isApproved: boolean) {
      this.name = name
      this.role = role
      this.isApproved = isApproved
   }

   showUserName () {
      console.log(`O nome do usuário é ${this.name}`)
   }

   showUserRole (canShow: boolean): void {
      if (canShow) {
         console.log(`A profissão do usuário é ${this.role}`);
         return;
      }

      console.log(`Você não tem permissão para ver as informações`);
   }
}

const zeca = new User("Zéca", "Administrator", true)

console.log(zeca.showUserName())
console.log(zeca.showUserRole(true))

// interfaces em classes
interface IVehicle {
   brand: string;
   showBrand (): void;
}

class Car implements IVehicle {

   brand
   wheels

   constructor(brand: string, wheels: number) {
      this.brand = brand;
      this.wheels = wheels;
   }

   showBrand (): void {
      console.log(`A marca do carro é ${this.brand}`)
   }
}

const fusca = new Car("VW", 4)
console.log(fusca.showBrand());
console.log(fusca);

// heranca
class SuperCar extends Car {
   engine;

   constructor(brand: string, wheels: number, engine: number) {
      super(brand, wheels);
      this.engine = engine;
   }
}

const a4 = new SuperCar("Audi", 4, 2.0)
a4.showBrand()


// decorators

// constructor decorator
function BaseParameters () {
   // trazendo todos os argumentos para inserir novos
   return function <T extends { new(...args: any[]): {} }> (constructor: T) {
      return class extends constructor {
         id = Math.random();
         createdAt = new Date();
      }
   }
}

@BaseParameters()
class Person {
   name;

   constructor(name: string) {
      this.name = name
   }
}

const sam = new Person("Sam");

console.log(sam)
