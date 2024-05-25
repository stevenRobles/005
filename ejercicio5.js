// 5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el valor de a: ', (a) => {
  rl.question('Ingrese el valor de b: ', (b) => {
    rl.question('Ingrese el valor de c: ', (c) => {
      
      const senA = Math.sin(a)
      const cosB = Math.cos(b)
      const truncA = Math.trunc(a)
      const moduloA = truncA % 2
      const raizCubicaA = Math.cbrt(a ** 3)
      const productoABC = a * b * c

     
      const resultado = (senA + cosB) * moduloA + raizCubicaA / productoABC

      console.log(`El resultado de la expresión es: ${resultado}`)
      rl.close()
    })
  })
})
