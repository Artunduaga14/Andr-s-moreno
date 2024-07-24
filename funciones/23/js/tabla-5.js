/**
     * realizar la tabla del 5 hasta el 5 con for 
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 abril 2024
     */


/** funtion como parametro */
function tabla(pnumero){
    let numero = pnumero
    let contador 
    let multi 
    let resultado = ""
    for(contador = 1; contador <= numero; contador++){
        multi = numero * contador
        resultado += `${numero + " x " + contador+ " = " +multi}\n`
    }
    return resultado
}
/** fin funtion como parametro */


/** funtion como expresion */
const tablaExp = function(pnumero){
    let numero = pnumero
    let contador 
    let multi 
    let resultado = ""
    for(contador = 1; contador <= numero; contador++){
        multi = numero * contador
        resultado += `${numero + " x " + contador+ " = " +multi}\n`
    }
    return resultado
}
/** fin funtion como expresion */