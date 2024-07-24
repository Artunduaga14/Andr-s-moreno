
/**
   * realizar la tabla del multiplicar del 1 al 5 for
   * Autor: Juan David Artunduaga Gomez
   * Jueves 7 de Julio 2024
   */


function tabla() {
  let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
  let numero2 = parseInt(document.getElementById('txtNumeroDos').value);

  let roperacion = "";
  pares = 0; 
  impares = 0; 

  for (let contador = 1; contador <= numero1; contador++) {
    for (let multiplicador = 1; multiplicador <= numero2; multiplicador++) {
      roperacion += operacion(multiplicador, contador);
    }
  }

  document.getElementById("tabla").innerHTML = `${roperacion} <br> la cantidad de pares es 
  ${pares}<br> la catidad de impares es ${impares}  `
  return false;
}

function operacion(multiplicador, contador) {
   let resultado = "";
   let producto = multiplicador * contador;
 
   if (producto % 2 == 0) {
     resultado += `${contador} X ${multiplicador} = ${producto} buzz <br>`;
     pares += 1;
   } else {
     resultado += `${contador} X ${multiplicador} = ${producto} bass <br>`;
     impares += 1;
   }
 
   return resultado;
 }


// function operacion(multi,contar){
//    let resultado = "";
//    let producto = multi * contar
//       if (multi %2 ==0){
//       resultado += `${contar} X ${multi} = ${multi} buzz <br>`
//       pares = pares + 1
//       }else{
//          resultado += `${contar} X ${multi} = ${multi} bass <br>`
//          impares = impares + 1
//       }
//       return resultado
//    }

// function tabla(){
//    let numero1 = parseInt(document.getElementById('txtNumeroUno').value);
//    let numero2 = parseInt(document.getElementById('txtNumeroDos').value);
 
//    let contar = 0
//    let multi = 0
//    let roperacion = ""
   
//    for(contar = 1;contar <= numero1; contar ++){
//       for(multi = 1; multi <= numero2; multi++)
//          roperacion += operacion(multi,contar)
   
//    }

//    document.getElementById("tabla").innerHTML = roperacion;
//    return false;
   
// }