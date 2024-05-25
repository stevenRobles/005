// 14.	Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.


const direccion = "via pueblo nuevo"


const primerCaracter = direccion[0]
const ultimoCaracter = direccion[direccion.length - 1]
const caracterMedio = direccion[Math.floor(direccion.length / 2)]

// Presentar la información
console.log(`Dirección: ${direccion}`)
console.log(`Primer carácter: ${primerCaracter}`)
console.log(`Carácter del medio: ${caracterMedio}`)
console.log(`Último carácter: ${ultimoCaracter}`)
