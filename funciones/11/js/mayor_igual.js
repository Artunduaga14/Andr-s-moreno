/**
     * imprimir cual de los dos numeros es mayor o igual 
     * Autor: Juan David Artunduaga Gomez
     * Lunes 9 de abril 2024
     */


/** funtion como parametro */
function mayor(pnumero1,pnumero2){
    let numero1 = pnumero1
    let numero2 = pnumero2
    if (numero1 != numero2){
        
        if (numero1 > numero2){
            return "el numero 1 es mayor: " + "\n" + numero1
        }
        else {
            return "el numero 2 es mayor: " + "\n" + numero2
        }

    }
    else {
        return "los numeros son iguales " 
    }
}
/** fin funtion como parametro */


/** funtion como expresion */
const mayorExp=function(pnumero1,pnumero2){
    let numero1 = pnumero1
    let numero2 = pnumero2
    if (numero1 != numero2){
        
        if (numero1 > numero2){
            return "el numero 1 es mayor: " + "\n" + numero1
        }
        else {
            return "el numero 2 es mayor: " + "\n" + numero2
        }

    }
    else {
        return "los numeros son iguales " 
    }
}

/** fin funtion como expresion */