/**
     * realizar la tabla del 9 hasta el 5 con while
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 abril 2024
     */


/** funtion como parametro */
function tabla(pnumero, pnumero2){
    let pares = 0;
    let impares = 0;
    let numero = pnumero
    let contador = 0
    let multi = 0
    let numero2 = pnumero2
    let resultado = ""
    while(contador < numero){
        contador = contador + 1
        multi = numero2 * contador
        resultado += `${numero2} x  ${ contador} = ${multi} ${determinarTipo(multi)} \n`
        pares += espar2(multi);
        impares += espar2(multi);
    }
    
    return resultado
}
function determinarTipo (resultado){
if(resultado %2 == 0){
    return "pares";
}
else {
    return " impares ";
}
}

function espar2(pnumero){
let numer = pnumero;
let resultado = 0;
if(numer %2 == 0){
  resultado = 1;
}
else{
  resultado = 0;
}
return resultado;
}
/** fin funtion como parametro */


/** funtion como expresion */
const tablaExp = function (pnumero, pnumero2){
    let pares = 0;
    let impares = 0;
    let numero = pnumero
    let contador = 0
    let multi = 0
    let numero2 = pnumero2
    let resultado = ""
    while(contador < numero){
        contador = contador + 1
        multi = numero2 * contador
        resultado += `${numero2} x  ${ contador} = ${multi} ${determinarTipoExp(multi)} \n`
        pares += espar2Exp(multi);
        impares += espar2Exp(multi) -1;
    }
   
    return resultado
}
const determinarTipoExp = function (resultado){
if(resultado %2 == 0){
    return "pares";
}
else {
    return " impares ";
}
}

const espar2Exp = function(pnumero){
let numer = pnumero;
let resultado = 0;
if(numer %2 == 0){
  resultado = 1;
}
else{
  resultado = 0;
}
return resultado;
}

/** fin funtion como expresion */