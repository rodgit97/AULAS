function pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
let joao = new pessoa("João", 30);
console.log(`pessoa ${joao.nome} tem ${joao.idade} de idade`);
//---------------------------
function nome(primeiro, ultimo) {
  this.primeiro = primeiro;
  this.ultimo = ultimo;
  this.nomeCompleto = function () {
    return this.primeiro + " " + this.ultimo;
  };
}
let maria = new nome("Maria", "Silva");
console.log(`O nome completo é ${maria.nomeCompleto()}`);

//---------------------------
ana = {};
ana.primeiro = "Ana";
ana.ultimo = "Santos";
ana.nomeCompleto = function (titulo) {
  return titulo + " " + this.primeiro + " " + this.ultimo;
};
console.log(ana.nomeCompleto("Dra."));

//---------------------------
console.log(joao.__proto__ === pessoa.prototype);
console.log(joao.__proto__ === maria.__proto__);
console.log(maria.__proto__ === joao.__proto__);
console.log(ana.__proto__ === joao.__proto__);
console.log(ana.__proto__);
console.log(joao.__proto__);
console.log(maria.__proto__);
console.log(pessoa.prototype);
// //-----------------------------------
// var john = Object.create(person);
// john.first = "John";
// john.last = "Doe";


// var jane = Object.create(pessoa);
// john.first = "jane";
// john.last = "Doe";

// console.log(jane)
// //------------------------------------