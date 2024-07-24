/**
     * contar del 1 al 5 con for
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
function imprimir(pnumero){
    let contador 
    let numero = pnumero
    let resultado = ""
    for(contador = 1;contador <= numero; contador ++ ){
        resultado += `${contador}\n`
    }
    return resultado
}
/** fin funtion como parametro */


/** funtion como expresion */
const imprimirExp=function(pnumero){
    let contador 
    let numero = pnumero
    let resultado = ""
    for(contador = 1;contador <= numero; contador ++ ){
        resultado += `${contador}\n`
    }
    return resultado
}
/** fin funtion como expresion */