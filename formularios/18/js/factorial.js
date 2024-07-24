
/**
   * imprimir factorial de 5 con while
   * Autor: Juan David Artunduaga Gomez
   * Jueves 6 de Julio 2024
   */

function factoreal(){
   let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
 
   let contar = 0
   let factoreal = 1
   let resultado = ""
   
   while(contar < numero1){
      contar = contar + 1
      factoreal = factoreal * contar
      resultado += `${factoreal}<br>`
   }

   document.getElementById("factoreal").innerHTML = resultado;
   return false;
   
}

