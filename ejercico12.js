// 12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.


const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function obtenerNombreMes(numeroMes) {
    
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
                   "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    
    if (numeroMes >= 1 && numeroMes <= 12) {
        return meses[numeroMes - 1]
    } else {
        return "Número de mes inválido"
    }
}


rl.question('Ingrese el número del mes (1-12): ', (respuesta) => {
    const numeroMes = parseInt(respuesta)
    const nombreMes = obtenerNombreMes(numeroMes)
    console.log(`El nombre del mes ${numeroMes} es ${nombreMes}.`)
    
    
    rl.close()
})
