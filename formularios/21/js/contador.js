
/**
   * contar del 1 al 5 con for
   * Autor: Juan David Artunduaga Gomez
   * Jueves 6 de Julio 2024
   */

function contador(){
   let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
 
   let contar = 0
   let resultado = ""
   
   for(contar = 1;contar <= numero1; contar ++){
      resultado += `${contar}<br>`
   }

   document.getElementById("contador").innerHTML = resultado;
   return false;
   
}

