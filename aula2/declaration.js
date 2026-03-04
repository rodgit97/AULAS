/*
function factorial(number) {
    var fact=1;
    for (i = 1; i <= number; i++) {
        fact *= i;
        
    }
    return fact;
}

factorial(5);
*/
function main() {

    var notaP1 = 15;
    var notaP2 = 20;
    var notaPF = 10;

    var notaF= notaFinal(notaP1, notaP2, notaPF);
    console.log("A nota final é: " + notaF);

    var f=factorial(5);
    console.log("O fatorial de 5 é: " + f);

    var numbers = [1,1,1,1,1,1,1,1,1,1];
    var avg= average(numbers);

    console.log("A média é: " + avg);
}
main();