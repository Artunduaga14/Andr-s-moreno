/**
     * realizar la tabla del 1 hasta el 5 en for 
     * Autor: Juan David Artunduaga Gomez
     * Lunes 9 de abril 2024
     */


/** funtion como parametro */
function tabla(ptabla) {
    let contador;
    let multi;
    let pares = 0;
    let impares = 0;
    let resultado;
    let ntabla = ptabla
    let resultado2 = "";
    
    for (contador = 1; contador <= ntabla; contador++) {
        for (multi = 1; multi <= ntabla; multi++) {
            resultado = contador * multi;
            resultado2 += `${contador} x ${multi} = ${resultado} ${determinarTipo(resultado)} \n`;
            pares += espar2(resultado);
            impares += espar2(resultado) -1;
        }
    }
    
    resultado2 += `el total de numeros pares es: ${pares}\n`;
    resultado2 += `el total de numeros impares es: ${impares * -1}\n`;
    return resultado2;
}

function determinarTipo(resultado) {
    if (resultado % 2 == 0) {
        return "BUZZ";
    } else {
        return "BASS";
    }
}

function espar2(pnumero){
    let numer = pnumero;
    let resultado = 0
    if(numer % 2 == 0){
       resultado = 1;
    }
    else{
        resultado = 0; 
    }
    return resultado; 
}

/** fin funtion como parametro */


/** funtion como expresion */
const tablaExp= function(ptabla){
    let contador
    let multi
    let pares = 0
    let impares = 0
    let resultado
    let resultado2 = ""
    for(contador = 1;contador <= ptabla; contador ++){
        for(multi = 1; multi <= ptabla; multi ++){
            resultado = contador * multi;
            resultado2 += `${contador} x ${multi} = ${resultado} ${determinarTipoExp(resultado)} \n`;
            pares += espar2Exp(resultado);
            impares += espar2Exp(resultado) -1;
        }
    }
    
    resultado2 += `el total de numeros pares es: ${pares}\n`;
    resultado2 += `el total de numeros impares es: ${impares * -1}\n`;
    return resultado2;
}

const determinarTipoExp = function(resultado) {
    if (resultado % 2 == 0) {
        return "BUZZ";
    } else {
        return "BASS";
    }
}

const espar2Exp = function(pnumero){
    let numer = pnumero;
    let resultado = 0
    if(numer % 2 == 0){
       resultado = 1;
    }
    else{
        resultado = 0; 
    }
    return resultado; 
}

/** fin funtion como expresion */ 