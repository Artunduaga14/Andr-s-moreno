/**
     * imprimir el numero mayor de dos numeros
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
function mayor(pnumero1,pnumero2){
let numero1=pnumero1
let numero2=pnumero2
if (numero1 > numero2){
    return numero1
}
else{
    return numero2
}
}
/** fin funtion como parametro */


/** funtion como expresion */
const mayorExp=function(pnumero1,pnumero2){
    let numero1=pnumero1
    let numero2=pnumero2
    if (numero1 > numero2){
        return numero1
    }
    else{
        return numero2
    }
    }
/** fin funtion como expresion */