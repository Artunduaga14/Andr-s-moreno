/**
     * imprimir si es mayor de edad o menor de edad
     * Autor: Juan David Artunduaga Gomez
     * Jueves 5 de Julio 2024
     */

function mayor(){
    let nombre = document.getElementById('txtNumeroUno').value;
    let edad= parseInt(document.getElementById('txtNumeroDos').value);
    let resultado                                                                               

    if (edad > 17){
       resultado = ` ${nombre} es mayor de edad tiene ${edad} años <br> `
    }
    else{
         resultado = `${nombre} es menor de edad tiene ${edad} años<br> `
    }
   
    document.getElementById("mayor").innerHTML = resultado;
    return false;
}