// //function person:
// let joao={
//     nome:"",
//     idade: 2,
// };
// new person("joao",25);

const { firstname, lastname } = require("../aula2/data");

// joao.fullName();
function Person(first,last) {
    this.first=first;
    this.last=last;
    
}
Person.prototype.greet=function () {
    console.log("hello " + this.first + " "+ this.last );

}

var john = new Person("john","doe");
john.greet();
var jane = new Person("jane","doe");
john.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ == jane.__proto__);

console.log("------------------")

var person ={
    firstname:'',
    lastname:'',
    greet:function () {
        return this.firstname + '' + this.lastname;
    }

}
var john = Object.create(person);
john.firstname='joao';
john.lastname='jame';

var jane = Object.create(person);
jane.firstname='jane';
jane.lastname='semim';


console.log("-----------------------------")
// class Person {
//     constructor(firstname,lastname) {
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.age=0;
//         this.greet=function () {
//             return this.firstname + " " + this.lastname;
//         };
//     }
// }


// var emitter =  require("events");
// var emtr = new emitter();

// emtr.emit("greet")