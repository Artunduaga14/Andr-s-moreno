function saludar(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let suma;
    suma = numeroUno + numeroDos
    let rsuma = `Suma: ${suma}<br>`
    document.getElementById("saludar").innerHTML= rsuma;
    return false;
}

