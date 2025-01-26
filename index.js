//Exercício 1
let calcularMdc = (a, b) => {
    while (b !== 0){
        const resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

  console.log(calcularMdc (10, 10))
  console.log(calcularMdc(12, 15));
  console.log(calcularMdc(27, 18));
  console.log(calcularMdc(48, 180));



  // Exercício 2
  let indiciMaiorMenor =(array) => {
    let indiciMaior = 0;
    let indiciMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiciMaior]) {
            indiciMaior = i; 
        }
        if (array[i] < array[indiciMenor]) {
            indiciMenor = i;
        }
    }
     
    return { indiciMaior, indiciMenor};
  }

console.log(indiciMaiorMenor([3, 8, 1, 4, 10, 2]))
console.log(indiciMaiorMenor([-5, -1, -10, 0, 5]));
console.log(indiciMaiorMenor([100, 200, 300]));



    //Exercicio 3
let somaMultiplos =(limite) => {
    let soma = 0;

    for(let i = 1; i < limite; i++){
        if (i%5 === 0 || i%7 === 0){
            soma += i;
        }
    }
    return soma;
}

console.log(somaMultiplos(10)); 
console.log(somaMultiplos(1000));

