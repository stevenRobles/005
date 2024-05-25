// 10.	El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, 
// se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. Presentar el valor de cada traje 
// con su respectivo valor, descuento y pago considerando el iva del 15%.

const readline = require ('readline')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let Porcentajedescuento =  0.10
const Iva = 0.15
let descuento = 10

rl.question("Ingresa el valor del traje:" , (traje) => {
    traje = parseFloat(traje)

if ( traje > 200 ){
     Descuento1 = traje * Porcentajedescuento
     IvaApl = Descuento1 * Iva
     console.log("El costo del traje es ", IvaApl )
     
} else  {
       (traje < 200)

    Descuento2 = traje - descuento

    DescuentoIva = Descuento2 * Iva 
    
    console.log("El total a pagar es de " , DescuentoIva)

  


}
rl.close()
})