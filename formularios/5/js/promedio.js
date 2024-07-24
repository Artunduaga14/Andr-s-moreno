/**
     * promedio de 3 notas
     * Autor: Juan David Artunduaga Gomez
     * Jueves 4 de Julio 2024
     */

function promedio(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let numeroTres = parseInt(document.getElementById('txtNumeroTres').value);

    let resultado = (numeroUno + numeroDos + numeroTres)/3
    let rresultado = `Resultado ${resultado}<br>`
    document.getElementById("promedio").innerHTML=rresultado;
    return false;
}