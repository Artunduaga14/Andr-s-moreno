
/**
   * imprimir cual de los dos numeros es mayor o igual 
   * Autor: Juan David Artunduaga Gomez
   * Jueves 5 de Julio 2024
   */

function Mayor(){
   let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
   let numero2 = parseInt(document.getElementById('txtNumeroDos').value);
   let numero3 = parseInt(document.getElementById('txtNumeroTres').value);
   let resultado = ''                                                                           

   if (numero1 == numero2 && numero1 == numero3 && numero3 == numero2){
         resultado = `los numero son iguales `
   }
   else {
     if (numero1 > numero2 && numero1 > numero3){
      resultado = `el primer numero es mayor ${numero1}<br> `
   }
   else{
      if (numero2 > numero1 && numero2 > numero3){
        resultado = `el segundo numero es el mayor ${numero2}<br> `
      }
      else{
           resultado =`el terser numero es mayor ${numero3}<br>`
      }
   }
   }
  
   document.getElementById("Mayor").innerHTML = resultado;
   return false;
   
}