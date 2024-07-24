/**
     * promedio de 3 notas
     * Autor: Juan David Artunduaga Gomez
     * Jueves 4 de abril 2024
     */

/** funtion como parametro */
function proNota(nota1,nota2,nota3){
    let suma
    let notaUno= nota1
    let notaDos=nota2
    let notaTres=nota3
    suma=(notaUno+notaDos+notaTres)/3

    return suma
}
/** fin funtion como parametro */



/** funtion como expresion */
const proNotaExp=function(nota1,nota2,nota3){
    let suma
    let notaUno= nota1
    let notaDos=nota2
    let notaTres=nota3
    suma=(notaUno+notaDos+notaTres)/3

    return suma
}
/** fin funtion como expresion */