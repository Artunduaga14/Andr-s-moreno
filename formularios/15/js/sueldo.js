/**
 * realizar un programa que calcule el pago de un empleado teniendo en cuanta unos factores
 * Autor: Juan David Artunduaga Gomez
 * Jueves 6 de Julio 2024
 */

function sueldo() {
  let diastra = parseInt(document.getElementById("txtNumeroDiastra").value);
  let valordias = parseInt(document.getElementById("txtNumeroValor").value);
  let salariomi = parseInt(document.getElementById("txtNumeroSueldo").value);
 
  let sueldo = diastra * valordias;
  let rsubsidiotras = subsidiotras(sueldo,salariomi)
  let rretencion = retencion(sueldo,salariomi)
  let salud = dedusibles1(sueldo)
  let pensio = dedusibles2(sueldo)
  let arl = dedusibles3(sueldo)
  let dedusibles = salud + pensio + arl
  let total = (sueldo + rsubsidiotras) - (rretencion + dedusibles)

  document.getElementById("sueldo").innerHTML = 
  `
   el sueldo bruto es de ${sueldo}<br> 
   el subsidio de trasporte es de ${rsubsidiotras}<br> 
   la retencion es de ${rretencion}<br> 
   la salud de la persona es de ${salud}<br> 
   la pension de la personas es de ${pensio}<br> 
   el arl de la persona es de ${arl}<br> 
   los de dusibles es de ${dedusibles}<br> 
   el total de su sueldo es de ${total}<br>
 `
  return false;
}

function subsidiotras(sueldo,salariomi){
    let rsubsidiotras
    if (sueldo <= salariomi * 2){
        rsubsidiotras = 114000;
      } else { 
        rsubsidiotras = 0;
      }
    return rsubsidiotras

}

function retencion(sueldo,salariomi){
    let rretencion
    if (sueldo <= salariomi * 4) {
        rretencion = 0;
      } else {
        rretencion = 0.04;
      }
    return rretencion
}

function dedusibles1(sueldo) {
  let salud = sueldo * (12 / 100);
  return salud;
}

function dedusibles2(sueldo) {
  let pensio = sueldo * (16 / 100);
  return pensio;
}

function dedusibles3(sueldo) {
  let arl = sueldo * (5.2 / 100);
  return arl;
}

