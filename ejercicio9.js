// 9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, el costo por unidad es de $0,25 caso  contrario el precio será  10% menos.

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let costoUnidad = 0.25
let descuento = 0.10

 
rl.question("Ingresa la cantidad de colas: " , (colas) => {
    colas = parseFloat(colas)
    if (colas < 12 ){
    total = colas * costoUnidad 
    console.log("El total a pagar es:" , total)
    } else   {
       
        totalDescuento = (colas * costoUnidad ) - 0.10
        console.log
    }
    
    rl.close()
})