/**
     * imprimir factorial de 5 con while
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
function imprimir(pnumero){
let numero = pnumero
let contador = 0
let factoreal = 1
while (contador < numero) {
    contador = contador + 1
    factoreal = factoreal * contador
}
return "el factor de 5 es de: "+ "\n" + factoreal
}
/** fin funtion como parametro */


/** funtion como expresion */
const imprimirExp=function(pnumero){
    let numero = pnumero
    let contador = 0
    let factoreal = 1
    while (contador < numero) {
        contador = contador + 1
        factoreal = factoreal * contador
    }
    return "el factor de 5 es de: "+ "\n" + factoreal
    }

/** fin funtion como expresion */