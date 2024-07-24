/**
     * contar del 1 al 5 con while
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
 function imprimir(pnumero){
    let contador = 0
    let numero = pnumero
    let resultado = ""
    while(contador < numero){
        contador = contador + 1
         resultado += `${contador}\n`

    }
    return resultado
 }

/** fin funtion como parametro */


/** funtion como expresion */
const imprimirExp=function(pnumero){
    let contador = 0
    let numero = pnumero
    let resultado = ""
    while(contador < numero){
        contador = contador + 1
         resultado += `${contador}\n`

    }
    return resultado
 }

/** fin funtion como expresion */