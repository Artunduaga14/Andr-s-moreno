/**
     * porcentaje de 3 notas
     * Autor: Juan David Artunduaga Gomez
     * Martes 9 de abril 2024
     */

/** funtion como parametro */
function porNota(pnota,pporce){
     let nota=pnota;
     let porcentaje=pporce;
     let renota;
     renota = nota * porcentaje;
     return renota;
}
/** fin funtion como parametro */


/** funtion como expresion */
const porNotaExp=function(pnota,pporce){
     let nota = pnota;
     let porcentaje = pporce;
     let renota;
     renota =  nota * porcentaje;
     return renota
}
/** fin funtion como expresion */