
/**
   * porsentaje de 3 notas e imprimir si la nota es buena,media o mala
   * Autor: Juan David Artunduaga Gomez
   * Jueves 5 de Julio 2024
   */

function mayor1(){
   let nota1 = parseInt(document.getElementById('txtNumeroUno').value);
   let nota2 = parseInt(document.getElementById('txtNumeroDos').value);
   let nota3 = parseInt(document.getElementById('txtNumeroTres').value);

   let promedio1 = nota1 * 0.2 
   let promedio2 = nota2 * 0.35
   let promedio3 = nota3 * 0.45
   let sumap = promedio1 + promedio2 + promedio3

  let rsumapromedio = sumapromedio(sumap) 
   document.getElementById("mayor1").innerHTML = rsumapromedio;
   return false;
   
}
function sumapromedio(sumap){
   let resultado
   if (sumap > 4.5){
      resultado = `es una nota superior ${sumap}` 
   }else if(sumap <= 4.5 && sumap > 3.5){
      resultado = `es una nota buena ${sumap}` 
   }else if (sumap <=3.5 && sumap >= 3.0){
      resultado = `es una nota media ${sumap}`
   }else {
      resultado = `es una nota mala ${sumap}`
   }
return resultado
}

