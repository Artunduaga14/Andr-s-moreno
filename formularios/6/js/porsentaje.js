/**
     * porsentaje de 3 notas
     * Autor: Juan David Artunduaga Gomez
     * Jueves 4 de Julio 2024
     */

function porsentaje(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let numeroTres = parseInt(document.getElementById('txtNumeroTres').value);

    let resultado1 = numeroUno * 0.3
    let resultado2 = numeroDos * 0.3
    let resultado3 = numeroTres * 0.4
    let resultadoSuma = resultado1 + resultado2 + resultado3

    let rresultado1 = `Resultado1: ${resultado1}<br>`
    let rresultado2 = `Resultado2: ${resultado2}<br> `
    let rresultado3 = `Resultado3: ${resultado3}<br>`
    let rresultadoSuma = `ResultadoSuma ${resultadoSuma}<br>`

    document.getElementById("porsentaje").innerHTML= rresultado1 + rresultado2 + rresultado3 + rresultadoSuma;
    return false;
}