// 7.	Algoritmo que pida dos números y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})



rl.question("Ingresa el primer número: ", (num1) => {
    rl.question("Ingresa el segundo número: ", (num2) => {
        num1 = parseInt(num1)
        num2 = parseInt(num2)

        // Verifica si el primer número es par y el segundo número es impar
        if (num1 % 2 === 0 && num2 % 2 !== 0) {
            if (num1 > num2) {
                console.log("El primer número (" + num1 + ") es mayor.")
            } else {
                console.log("El segundo número (" + num2 + ") es mayor.")
            }
        } else {
            console.log("Las condiciones no se cumplen: el primer número debe ser par y el segundo impar.")
        }

        rl.close()
    })
})
