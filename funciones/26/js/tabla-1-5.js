/**
     * realizar la tabla de multiplicar del 1 al 5 con while
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
function tabla(pnumero){
    let numero = pnumero
    let contador = 0
    let multi = 0
    let pares = 0
    let impares = 0
    let resultado = 0
    let resultado2 = ""
    while(contador < numero){
        contador = contador + 1
        multi = 0
        while(multi < numero){
            multi = multi + 1
            resultado = contador * multi
            resultado2 += `${contador} x ${multi} = ${resultado} ${determinarTipo(resultado)} \n`
                pares += espar2 (resultado)
                impares += espar2 (resultado) + -1
        }
    }
   resultado2 +=`los numero pares es: ${pares}\n`;
   resultado2 +=`los numero impares es: ${impares * -1}\n`;
   return resultado2;
    
}

function determinarTipo(resultado){
    if(resultado %2 == 0){
        return "BUZZ";

    }
    else{
        return " BASS ";
    }
}

function espar2(pnumero){
    let numer = pnumero;
    let resultado = 0;
    if (numer %2 == 0){
        resultado = 1;
    }
    else{
        resultado = 0;
    }
    return resultado;
}
    
/** fin funtion como parametro */


/** funtion como expresion */
const tablaExp = function (pnumero){
    let numero = pnumero
    let contador = 0
    let multi = 0
    let pares = 0
    let impares = 0
    let resultado = 0
    let resultado2 = ""

    while(contador < numero){
        contador = contador + 1
        multi = 0
        while(multi < numero){
            multi = multi + 1
            resultado = contador * multi
                resultado2 += `${contador} x  ${ multi } =  ${resultado} ${determinarTipoExp(resultado)} \n`
                pares += espar2Exp(resultado);
                impares += espar2Exp(resultado) -1;
        }
    }
        resultado2 += `los numero pares son: ${pares}\n`
        resultado2 += `los numero pares son: ${impares * -1}\n`
    return resultado2 
}

const determinarTipoExp =function(resultado){
    if (resultado %2 == 0){
        return "BUZZ";
    }
    else{
      return " BASS ";
    }
}
const espar2Exp = function (pnumero){
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