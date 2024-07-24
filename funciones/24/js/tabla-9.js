/**
     * tabla del 9 par e impar con for 
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */

function tabla(pnumero,pnumero2){
let pares = 0 ;
    let impares = 0; 
    let numero = pnumero;
    let contador = 0; 
    let multi = 0; 
    let numero2 = pnumero2;
    let resultado = "";
    for(contador = 1;contador <= numero; contador ++){
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
const tablaExp= function(){
    let pares = 0;
    let impares = 0 ;
    let numero = 5
    let contador 
    let multi 
    let numero2 = 9
    let resultado = ""
    for(contador = 1;contador <= numero; contador ++){
        multi = numero2 * contador
        resultado += `${numero2} x  ${ contador} = ${multi} ${determinarTipoExp(multi)} \n`
        pares += espar2Exp(multi);
        impares += espar2Exp(multi);
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