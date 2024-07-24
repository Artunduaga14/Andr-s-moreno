
/**
   * calcualar la edad de 3 personas e imprimir si cada persona es mayor de edad 
   * Autor: Juan David Artunduaga Gomez
   * Jueves 5 de Julio 2024
   */

function mayor1(){
   let añonasi1 = parseInt(document.getElementById('txtNumeroUno').value);
   let añonasi2 = parseInt(document.getElementById('txtNumeroDos').value);
   let añonasi3 = parseInt(document.getElementById('txtNumeroTres').value);
   let añoactal= 2024

   let dato1 =`${calcular(añonasi1,añoactal)}`
   let dato2 =`${calcular(añonasi2,añoactal)}`
   let dato3 =`${calcular(añonasi3,añoactal)}`

   let edad1 =`${mayor2(dato1)}`
   let edad2 =`${mayor2(dato2)}`
   let edad3 =`${mayor2(dato3)}`
   let suma =`${(parseInt(dato1) + parseInt(dato2) + parseInt(dato3))/3}`
   let promedio =`${mayor2(suma)}`
   
   document.getElementById("mayor1").innerHTML = `${edad1}<br>  ${edad2}<br> ${edad3}<br> ${promedio} `;
   return false;
   
}

function calcular(paño,pañoactal){
let año = pañoactal - paño
return año
}

function mayor2(paño){
  let año = paño

  if (año > 17){
   resultado = `es mayor de edad ${año}`
  }
   else {
   resultado = `es menor de edad ${año}`
  }
  return resultado
   
}

function mayorTotal(edad1,edad2,edad3){
   let promedio = (parseInt(edad1) + parseInt(edad2) + parseInt(edad3) )/3
   let resultado = ''
  
   if (promedio > 17){
         resultado = `es mayor de edad ${promedio} `
   }
   else {
      resultado = `es menor de edad ${promedio} `
   }
   
   return resultado;
}

