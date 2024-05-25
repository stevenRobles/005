// 18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra
const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function verificarUltimoCaracter(cadena) {
    const ultimoCaracter = cadena.charAt(cadena.length - 1)
    if (/[a-zA-Z]/.test(ultimoCaracter)) {
        console.log("El último carácter es una letra:", ultimoCaracter);
    } else {
        console.log("El último carácter no es una letra.")
    }
}


rl.question('Ingresa una cadena: ', (cadena) => {
    verificarUltimoCaracter(cadena)
    rl.close()
})
