function saludar(){
    let saludo = document.getElementById('txtsaludo').value;
    document.getElementById("saludo").innerHTML= `<strong>${saludo}</strong>`;
    // alert('funcina el boton');
    return false
}

