/**
     * imprimir resultado de resta, multiplicasion y division 
     * Autor: Juan David Artunduaga Gomez
     * Jueves 4 de abril 2024
     */

let numeroUno;
let numeroDos;

/** funtion como parametro */
function restar(num1,num2){
    let resta;
    numeroUno=num1;
    numeroDos=num2;
    resta = numeroUno - numeroDos;

    return resta;
}

function multiplicar(num1,num2){
    let multiplicacion;
    numeroUno = num1;
    numeroDos = num2;
    multiplicacion = numeroUno * numeroDos;

    return multiplicacion;

}

function dividir(num1,num2){
    let dividision;
    numeroUno = num1;
    numeroDos = num2;
    dividision = numeroUno / numeroDos;

    return dividision;
}

//** funcion como expersion */

const restarExp=function(num1,num2){
    let resta;
    numeroUno=num1;
    numeroDos=num2;
    resta = numeroUno - numeroDos;

    return resta;
}

const multiplicarExp=function(num1,num2){
    let multiplicacion;
    numeroUno = num1;
    numeroDos = num2;
    multiplicacion = numeroUno * numeroDos;

    return multiplicacion;
}

const dividirExp=function(num1,num2){
    let dividision;
    numeroUno = num1;
    numeroDos = num2;
    dividision = numeroUno / numeroDos;

    return dividision;
}