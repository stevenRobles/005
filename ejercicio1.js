// 1.	Algoritmo que transforme de grados Celsius a Fahrenheit
// inicio
// pedir al usuario que ingrese los grados celsius 
// proceso : transformar los grados celsius a grados fahrenheit
// salida: grados Fahrenheit
// Fin.

const readline = require('readline')
 const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
 })
 rl.question("ingresa el valor en grados celsius:", function(celsius){
   celsius = parseInt(celsius);

   let Fahrenheit = (celsius * 9/5) + 32

console.log("los grados Fahrenheit son" , + Fahrenheit);

rl.close();

 })
 
 