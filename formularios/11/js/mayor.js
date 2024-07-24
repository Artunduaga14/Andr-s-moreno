/**
     * imprimir cual de los dos numeros es mayor o igual 
     * Autor: Juan David Artunduaga Gomez
     * Jueves 5 de Julio 2024
     */

function mayor(){
     let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
     let numero2 = parseInt(document.getElementById('txtNumeroDos').value);
     let resultado                                                                               
 
     if (numero1 != numero2){
        if (numero1 > numero2){
           resultado = `el primer numero es mayor ${numero1}<br> `
        }
        else{
             resultado = `el segundo numero es el mayor ${numero2}<br> `
        }
     }
     else {
       resultado = `los numero son iguales `
     }
    
     document.getElementById("mayor").innerHTML = resultado;
     return false;
 }
 
 