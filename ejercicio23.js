// 23.	Dado una cadena indicar cuantos elementos tiene, sin usar ciclos 

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function contarElementos(cadena) {
    return cadena.length
}


rl.question('Ingrese una cadena: ', (cadena) => {
    
    console.log(`La cadena tiene ${contarElementos(cadena)} elementos.`)
    
    rl.close()
})
