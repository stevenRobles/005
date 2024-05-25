// 2.	Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número

const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,

})

rl.question("ingresa un numero entero:" , function(numero) {

  numero = parseInt(numero)

   let doble = (numero * 2)
   let  triple = (numero * 3)

   console.log("el doble del numero es", doble )
   console.log("el triple del numero es" ,  triple)

   rl.close();

})

