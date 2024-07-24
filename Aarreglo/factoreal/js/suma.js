
let contar = 0
let factoreal =  1
let resultado = ""
for(contar = 1;contar < 5; contar++){
   factoreal = factoreal * contar
    resultado += `<option>${factoreal}</option>`
}
document.getElementById("numero1").innerHTML= resultado;