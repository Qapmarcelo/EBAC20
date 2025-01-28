// Exercício 2
let indiciMaiorMenor = (array) => {
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

    return { indiciMaior, indiciMenor };
}

console.log(indiciMaiorMenor([3, 8, 1, 4, 10, 2]));
console.log(indiciMaiorMenor([-5, -1, -10, 0, 5]));
console.log(indiciMaiorMenor([100, 200, 300]));
