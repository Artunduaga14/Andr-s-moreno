/**
      * pago total de una persona - dias trabajados, salud, pensio, arl 
     * Autor: Juan David Artunduaga Gomez
     * Jueves 4 de Julio 2024
     */

function Sueldo(){
    let diastra = parseInt(document.getElementById('txtNumeroDiastra').value);
    let valordias = parseInt(document.getElementById('txtNumeroValor').value);
    // let sueldo = parseInt(document.getElementById('txtNumeroSueldo').value);


    let salario = diastra * valordias
    let rsalario = `el salario de la persona es de:  ${salario}<br>`

    let salud = salario * (12/100)
    let rsalud = `la salud de la persona es de: ${salud}<br>`

    let pensio = salario *(16/100)
    let rpensio = `la pension de la persona es de: ${pensio}<br>`

    let arl = salario * (5.2/100)
    let rarl = `el arl de la persona es de: ${arl}<br>`

    let valortotal = (salario) - (salud + pensio + arl)
    let rvalortotal = `el sueldo total es de: ${valortotal}<br>`

    document.getElementById("Sueldo").innerHTML= rsalario + rsalud + rpensio + rarl + rvalortotal;
    return false;
}