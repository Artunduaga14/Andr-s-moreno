/**
     * imprimir si es mayor de edad o menor de edad
     * Autor: Juan David Artunduaga Gomez
     * Miercole 10 de abril 2024
     */


/** funtion como parametro */
function mayorEdad(pnacimiento,pactual){
    let edad
    let nacimiento=pnacimiento
    let alctual=pactual
    edad =  alctual - nacimiento
    if (edad > 17){
        return "es mayor de edad " + "\n" + edad;

    }
    else{
        return "es menor de edad " + "\n" + edad;
    }
}
/** fin funtion como parametro */


/** funtion como expresion */
const mayorEdadExp = function(pnacimiento,pactual){
    let edad
    let nacimiento=pnacimiento
    let alctual=pactual
    edad =  alctual - nacimiento
    if (edad > 17){
        return "es mayor de edad " + "\n" + edad;

    }
    else{
        return "es menor de edad " + "\n" + edad;
    }
}
/** fin funtion como expresion */