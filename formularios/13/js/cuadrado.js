
/**
   * calcular el area de 3 cuadrados
   * Autor: Juan David Artunduaga Gomez
   * Jueves 5 de Julio 2024
   */

function cuadrado(){
   let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
   let numero2 = parseInt(document.getElementById('txtNumeroDos').value);
   let numero3 = parseInt(document.getElementById('txtNumeroTres').value);
   let resultado = ''
  
    let cuadrado1 = numero1 * numero1
    let cuadrado2 = numero2 * numero2
    let cuadrado3 = numero3 * numero3

   if (cuadrado1 == cuadrado2 && cuadrado1 == cuadrado3 && cuadrado3 == cuadrado2){
         resultado = `los numero son iguales `
   }
   else {
     if (cuadrado1 > cuadrado2 && cuadrado1 > cuadrado3){
      resultado = `el primer numero es mayor ${cuadrado1}<br> `
   }
   else{
      if (cuadrado2 > cuadrado1 && cuadrado2 > cuadrado3){
        resultado = `el segundo numero es el mayor ${cuadrado2}<br> `
      }
      else{
           resultado =`el terser numero es mayor ${cuadrado3}<br>`
      }
   }
   }
   document.getElementById("cuadrado").innerHTML = resultado;
   return false;
   
}