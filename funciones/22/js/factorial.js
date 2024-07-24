/**
     * imprimir el factorial del 5 en for
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
function imprimir(pnumero){
    let numer = pnumero
    let factorial = 1
    let contador
    let resultado = ""
    for(contador = 1;contador <= numer; contador++){
        factorial = factorial * contador
        resultado += `${factorial}\n`

    }
    return resultado
 
}

/** fin funtion como parametro */


/** funtion como expresion */
const imprimirExp=function(pnumero){
    let numer = pnumero
    let factorial = 1
    let contador
    let resultado = ""
    for(contador = 1;contador <= numer; contador++){
        factorial = factorial * contador
        resultado += `${factorial}\n`

    }
    return resultado
 
}


/** fin funtion como expresion */