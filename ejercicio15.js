// 15.	Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.


let valores = Array.from({ length: 5 }, () => Math.floor(Math.random() * 201) - 100)


console.log("Valores generados:", valores)


if (valores[0] > 0 && valores[0] % 2 === 0) {
    console.log("El primer valor es par positivo:", valores[0])
}


if (valores[valores.length - 1] < 0 && valores[valores.length - 1] % 2 !== 0) {
    console.log("El último valor es impar negativo:", valores[valores.length - 1])
}
