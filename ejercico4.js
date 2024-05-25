// 4. Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos(nota: una libra equivale a 0.453593 kilogramos)

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
rl.question("Ingresa tu peso: " , function(peso){
    peso = parseFloat(peso)

     let kilogramos = 0.453593
    let pesoKilos = (peso * kilogramos)
    console.log("Tu peso em kilos es:" , pesoKilos)

    let gramos = kilogramos * 1000

    console.log("Tu peso en gramos es " , gramos)

    rl.close()
    })
