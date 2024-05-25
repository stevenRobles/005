// 22.	Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function compararNombres(nombre1, nombre2) {
    if (nombre1 === nombre2) {
        return "Los nombres son iguales."
    } else if (nombre1 < nombre2) {
        return "El primer nombre es menor que el segundo."
    } else {
        return "El primer nombre es mayor que el segundo."
    }
}


rl.question('Ingrese el primer nombre: ', (nombre1) => {
   
    rl.question('Ingrese el segundo nombre: ', (nombre2) => {
        
        console.log(compararNombres(nombre1, nombre2))
        
        rl.close()
    })
})
