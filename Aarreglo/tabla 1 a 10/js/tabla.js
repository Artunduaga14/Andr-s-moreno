

/**
   * tabla del multiplicar con areglo y diseñodel
   * Autor: Juan David Artunduaga Gomez
   * sabado 13 de Julio 2024
   */

let arreglo = []
let iteracion 
let resultadoLista = ""
let numero1
arreglo = [1,2,3,4,5,6,7,8,9,10]
for (iteracion = 0; iteracion < arreglo.length;iteracion++){
 resultadoLista += `<option> ${arreglo[iteracion]}</option>`;
}
document.getElementById("numero1").innerHTML = resultadoLista

// fila dos 
arreglo = []
for (iteracion = 0; iteracion < 10;iteracion++){
     numero1 = iteracion + 1;
     arreglo.push(numero1);
   }
resultadoLista =""
   for (iteracion = 0; iteracion < arreglo.length;iteracion++){
    resultadoLista += `<option> ${arreglo[iteracion]}</option>`;
   }
   document.getElementById("numero2").innerHTML = resultadoLista
   
//    factoreal

