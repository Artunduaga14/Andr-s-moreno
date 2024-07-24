/**
     * porsentaje de um mumero 
     * Autor: Juan David Artunduaga Gomez
     * Jueves 4 de abril 2024
     */


/** funtion como parametro */
function porNota(pnota,pporce){
    let nota = pnota;
    let porce = pporce;
    let resultadoNot;
    resultadoNot=nota/porce;

    return resultadoNot;
}
/** fin funtion como parametro */


/** funtion como expresion */
const porNotaExp=function(pnota,pporce){
    let nota = pnota;
    let porce = pporce;
    let resultadoNot;
    resultadoNot=nota/porce;

    return resultadoNot;
}
/** fin funtion como expresion */