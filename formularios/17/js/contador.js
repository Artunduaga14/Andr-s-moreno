
/**
   * contar del 1 al 5 con while
   * Autor: Juan David Artunduaga Gomez
   * Jueves 6 de Julio 2024
   */

function contador(){
   let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
 
   let contar = 0
   let resultado = ""
   
   while(contar < numero1){
      contar = contar + 1
      resultado += `${contar}<br>`
   }

   document.getElementById("contador").innerHTML = resultado;
   return false;
   
}

