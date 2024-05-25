// 24.	Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function contarElementos(arreglo) {
    return arreglo.length;
}


rl.question('Ingrese los elementos del arreglo separados por comas: ', (entrada) => {
    
    const arreglo = entrada.split(',')
    
    console.log(`El arreglo tiene ${contarElementos(arreglo)} elementos.`)
    
    rl.close()
})
