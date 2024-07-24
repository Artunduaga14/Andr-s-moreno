/**
     * imprimir el numero mayor de 3 numeros
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
function mayor(pnumero1,pnumero2,pnumero3){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let numero3 = pnumero3;
    if(numero1 == numero2 && numero1 == numero3 && numero3 == numero2){
        return "los 3 numeros son iguales" ;
    }
    else{
        if(numero1 > numero2 && numero1 > numero3){
            return "el numero mayor es el: " + "\n" + numero1;
        }
        else{
            if (numero2 > numero1 && numero2 > numero3){
                return "el numero mayor es el: " + "\n" + numero2;
            }
            else{
                return "el numero mayor es el: " + "\n" + numero3;
            }
        }

    }
}
/** fin funtion como parametro */


/** funtion como expresion */
const mayorExp = function(pnumero1,pnumero2,pnumero3){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let numero3 = pnumero3;
    if(numero1 == numero2 && numero1 == numero3 && numero3 == numero2){
        return "los 3 numeros son iguales" ;
    }
    else{
        if(numero1 > numero2 && numero1 > numero3){
            return "el numero mayor es el: " + "\n" + numero1;
        }
        else{
            if (numero2 > numero1 && numero2 > numero3){
                return "el numero mayor es el: " + "\n" + numero2;
            }
            else{
                return "el numero mayor es el: " + "\n" + numero3;
            }
        }

    }
}
/** fin funtion como expresion */