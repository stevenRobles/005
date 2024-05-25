// 19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function verificarPrimerCaracter(cadena) {
    const primerCaracter = cadena.charAt(0)
    if (/[aeiouAEIOU]/.test(primerCaracter)) {
        console.log("El primer carácter es una vocal:", primerCaracter)
    } else {
        console.log("El primer carácter no es una vocal.")
    }
}


rl.question('Ingresa una cadena: ', (cadena) => {
    verificarPrimerCaracter(cadena)
    rl.close()
})
