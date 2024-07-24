
/**
   * realizar la tabla del 9 hasta el 5 con while
   * Autor: Juan David Artunduaga Gomez
   * Jueves 6 de Julio 2024
   */

function tabla(){
   let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
   let numero2 = parseInt(document.getElementById('txtNumeroDos').value);
 
   let contar = 0
   let multi = 0
   let resultado = ""
   
   while(contar < numero2){
      contar = contar + 1
      multi = numero1 * contar
      if (multi %2 ==0){
      resultado += `${numero1} X ${contar} = ${multi} pares <br>`
      }else{
         resultado += `${numero1} X ${contar} = ${multi} impares <br>`
      }
   }

   document.getElementById("tabla").innerHTML = resultado;
   return false;
   
}

