// 11.	Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.

const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function obtenerNombreDia(numeroDia) {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
    if (numeroDia >= 1 && numeroDia <= 7) {
        return dias[numeroDia - 1]
    } else {
        return "Número de día inválido"
    }
}


rl.question('Ingrese un número del día de la semana (1-7): ', (input) => {
    const numeroDia = parseInt(input, 10); 

    
    if (isNaN(numeroDia)) {
        console.log("Entrada no válida, por favor ingrese un número.")
    } else {
        const nombreDia = obtenerNombreDia(numeroDia)
        console.log(`El día número ${numeroDia} es ${nombreDia}.`)
    }

    
    rl.close()
})


