function operaciones(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
   
    let resultado;
    resultado = numeroUno / 100

    
    let rresultado = `Resultado: ${resultado}<br>`
   
    
    document.getElementById("operaciones").innerHTML= rresultado;
    return false;
}

