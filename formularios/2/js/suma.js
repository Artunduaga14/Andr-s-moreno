function sumar(){
    let numero1 = parseInt(document.getElementById("txtNumeroUno").value);
    let numero2 = parseInt(document.getElementById("txtNumeroDos").value);

    let suma = numero1 + numero2;
    let rsuma = `la suma es ${suma}<br>`
    document.getElementById("sumar").innerHTML = rsuma;
    return false
}

