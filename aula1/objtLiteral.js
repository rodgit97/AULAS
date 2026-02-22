// var emptyObject = {};
// var person = { firstName: "joao" };

// console.console.log(person);

var person = {
  primeironome: "joao",
  segundonpme: "ninguem",
  idade:13,
  nomecompleto:function(){
    return this.primeironome + " " + this.segundonpme
  }
};
console.log("-----")
console.log(person.primeironome)
console.log(person.segundonpme)
console.log(person["primeironome"])
console.log(person["segundonpme"])
console.log(person.nomecompleto)
console.log(person["nomecompleto"])
