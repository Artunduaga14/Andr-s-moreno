/**
    * pago total de una persona - dias trabajados, alud, pensio, arl 
     * Autor: Juan David Artunduaga Gomez
     * Jueves 4 de Julio 2024
     */

function area(){
    let lado = parseInt(document.getElementById('txtNumeroLado').value);
    let base = parseInt(document.getElementById('txtNumeroBase').value);
    let altura = parseInt(document.getElementById('txtNumeroAltura').value);
    let tbase = parseInt(document.getElementById('txtNumeroTbase').value);
    let taltura = parseInt(document.getElementById('txtNumeroTaltura').value);


    let cuadrado = lado * lado
    let rectangulo = base * altura
    let triagulo = (tbase * taltura)/2
    
    let rresultado1 = `lado cuadro ${cuadrado}<br>`
    let rresultado2 = `lado rectangulo ${rectangulo}<br> `
    let rresultado3 = `lado triangulo ${triagulo}<br>`
  
    document.getElementById("area").innerHTML= rresultado1 + rresultado2 + rresultado3;
    return false;
}