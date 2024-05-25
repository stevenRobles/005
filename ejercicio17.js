// 17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function verificarPrimerCaracter(cadena) {
    const primerCaracter = cadena.charAt(0)
    if (/\d/.test(primerCaracter)) {
        console.log("El primer carácter es un dígito:", primerCaracter)
    } else {
        console.log("El primer carácter no es un dígito.")
    }
}

// Leer la cadena desde la consola
rl.question('Ingresa una cadena: ', (cadena) => {
    verificarPrimerCaracter(cadena)
    rl.close();
})
