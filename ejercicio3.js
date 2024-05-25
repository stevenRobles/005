// 3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.

const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
rl.question("ingresa el primer  valor." , (num1) => {
  rl.question("Ingresa el segundo valor." ,  (num2) => {
     rl.question("Ingresa el tercer valor " , (num3)=> {
        rl.question("Ingresa el cuarto valor." , (num4) => {
           
            num1 = parseFloat(num1)
            num2 = parseFloat(num2)
            num3 = parseFloat(num3)
            num4 = parseFloat(num4)

    let suma = num1 + num2 + num3 + num4 
    let producto = (num1 * num2 * num3 * num4 )
    let media = (suma / 4 )

    console.log("La suma de los 4 valores es:" , suma )
   console.log("El producto  de los 4 valores  es:" , producto )
  console.log("La media  de los 4 valores es:" , media  )

  rl.close()


        })
     })
  })
})





