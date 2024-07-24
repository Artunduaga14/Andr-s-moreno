/**
     * imprimir el numero mayor de dos numeros
     * Autor: Juan David Artunduaga Gomez
     * Jueves 5 de Julio 2024
     */

function mayor(){
    let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
    let numero2 = parseInt(document.getElementById('txtNumeroDos').value);
    let resultado                                                                               

    if (numero1 > numero2){
       resultado = `el numero mayor fue el primero ${numero1}<br>`
    }
    else{
        resultado = `el numero mayor fue el segundo ${numero2}<br>`
    }
   
    document.getElementById("mayor").innerHTML = resultado;
    return false;
}