//Exercício 1
let calcularMdc = (a, b) => {
    while (b !== 0){
        const resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

  console.log(calcularMdc (10, 10));
  console.log(calcularMdc(12, 15));
  console.log(calcularMdc(27, 18));
  console.log(calcularMdc(48, 180));




 

