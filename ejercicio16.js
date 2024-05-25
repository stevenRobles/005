// 16.	Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let nombres = []


function agregarNombre() {
    if (nombres.length < 3) {
        rl.question(`Ingresa el nombre ${nombres.length + 1}: `, (nombre) => {
            nombres.push(nombre)
            agregarNombre()
        })
    } else {
        nombres.forEach(nombre => {
            let primerCaracter = nombre.charAt(0);
            let ultimoCaracter = nombre.charAt(nombre.length - 1)
            console.log(`Nombre: ${nombre}, Primer carácter: ${primerCaracter}, Último carácter: ${ultimoCaracter}`)
        })
        rl.close()
    }
}

agregarNombre()
