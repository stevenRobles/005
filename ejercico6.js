// // 6.	Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal. El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.


const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const SALARIO_HORA_NORMAL = 5
const HORAS_NORMALES = 40
const TASA_SOBRETIEMPO = 2
const TASA_SEGURO_SOCIAL = 0.10

rl.question("Ingresa el número de horas trabajadas en la semana: ", (horasTrabajadas) => {
    horasTrabajadas = parseFloat(horasTrabajadas)

    let sueldoNormal = HORAS_NORMALES * SALARIO_HORA_NORMAL
    let horasSobretiempo
    if (horasTrabajadas > HORAS_NORMALES) {
        horasSobretiempo = horasTrabajadas - HORAS_NORMALES
    } else {
        horasSobretiempo = 0
    }
    
    let sueldoSobretiempo = horasSobretiempo * SALARIO_HORA_NORMAL * TASA_SOBRETIEMPO
    let ingresoTotal = sueldoNormal + sueldoSobretiempo
    let seguroSocial = ingresoTotal * TASA_SEGURO_SOCIAL
    let sueldoNeto = ingresoTotal - seguroSocial

    console.log("El sueldo normal es:", sueldoNormal)
    console.log("Las horas de sobretiempo son:", horasSobretiempo)
    console.log("El sueldo de sobretiempo es:", sueldoSobretiempo)
    console.log("El ingreso total es:", ingresoTotal)
    console.log("El seguro social es:", seguroSocial)
    console.log("El sueldo neto a recibir es:", sueldoNeto)

    rl.close()
})
