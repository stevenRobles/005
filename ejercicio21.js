// 21.	Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function compararCaracteres(caracter1, caracter2) {
    if (caracter1 === caracter2) {
        console.log(`Los caracteres ${caracter1} y ${caracter2} son iguales.`)
    } else if (caracter1 < caracter2) {
        console.log(`El caracter ${caracter1} es menor que ${caracter2}.`)
    } else {
        console.log(`El caracter ${caracter1} es mayor que ${caracter2}.`)
    }
}


rl.question('Ingresa el primer caracter: ', (caracter1) => {

    rl.question('Ingresa el segundo caracter: ', (caracter2) => {
        
        compararCaracteres(caracter1, caracter2)
        
        rl.close()
    })
})
