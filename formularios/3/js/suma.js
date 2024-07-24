function operaciones(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    
    let rresta = resta(numeroUno,numeroDos)
    let rmultiplicasion = multiplicasion(numeroUno,numeroDos)
    let rdivision = division(numeroUno,numeroDos)
 
    document.getElementById("operaciones").innerHTML= rresta + rmultiplicasion + rdivision;
    return false;
}

function resta(numeroUno,numeroDos){
    let restar = numeroUno - numeroDos
    let rrestar = `resta ${restar}<br>`
    return rrestar
}

function multiplicasion(numeroUno,numeroDos){
    let multiplicar = numeroUno * numeroDos
    let rmultiplicar = `multiplicasion ${multiplicar}<br>`
    return rmultiplicar
}

function division(numeroUno,numeroDos){
    let dividir = numeroUno / numeroDos
    let rdividir = `dividir ${dividir}<br>`
    return rdividir
}

