// 8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion ", . ; :"
// y si no presentar solo el carácter.

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingresa un carácter: ", (char) => {
    if (char.length === 1) {
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            console.log("El carácter está entre 'a' y 'z' (o 'A' y 'Z').")
        } else if (char === ',' || char === '.' || char === ';' || char === ':') {
            console.log("El carácter es un signo de puntuación.")
        } else {
            console.log("El carácter es:", char);
        }
    } else {
        console.log("Por favor, ingresa un solo carácter.")
    }
    rl.close()
})
