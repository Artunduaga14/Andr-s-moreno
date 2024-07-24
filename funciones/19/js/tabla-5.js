/**
     * realizar la tabla del 5 hasta 5 con while
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 abril 2024
     */


/** funtion como parametro */
function tabla(pnumero){
    let numero = pnumero
    let contador = 0
    let multi = 0
    let resultado = ""
    while(contador < numero){
        contador = contador + 1
        multi = numero * contador 
        resultado += `${numero + " x " + contador + " = " + multi}\n`

    }
    return resultado
}
/** fin funtion como parametro */


/** funtion como expresion */
const tablaExp = function(pnumero){
    let numero = pnumero
    let contador = 0
    let multi = 0
    let resultado = ""
    while(contador < numero){
        contador = contador + 1
        multi = numero * contador 
        resultado += `${numero + " x " + contador + " = " + multi}\n`

    }
    return resultado
}

/** fin funtion como expresion */