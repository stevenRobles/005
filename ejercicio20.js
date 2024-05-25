// 20.	Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,”

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function verificarCaracterDePuntuacion(cadena) {
    const longitud = cadena.length
    const indiceMedio = Math.floor(longitud / 2)
    const caracterMedio = cadena.charAt(indiceMedio)

    const caracteresDePuntuacion = [';', ':', '.', ',']
    
    if (caracteresDePuntuacion.includes(caracterMedio)) {
        console.log("El carácter en medio es un carácter de puntuación:", caracterMedio)
    } else {
        console.log("El carácter en medio no es un carácter de puntuación.")
    }
}


rl.question('Ingresa una cadena: ', (cadena) => {
    verificarCaracterDePuntuacion(cadena)
    rl.close()
})
