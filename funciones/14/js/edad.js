/**
     * calcualar la edad de 3 personas e imprimir si cada persona es mayor de edad 
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
let persona1
let persona2
let persona3

function mayorEdad1(pnacimiento1,pactual){
    let nacimiento1=pnacimiento1;
    let alctual=pactual;
    persona1 =  alctual - nacimiento1

    if (persona1 > 17){
        return "es mayor de edad " + "\n" + persona1;

    }
    else{
        return "es menor de edad " + "\n" + persona1;
    }
}
function mayorEdad2(pnacimiento2,pactual){
    let nacimiento2=pnacimiento2;
    let alctual=pactual;
    persona2 =  alctual - nacimiento2
    if (persona2 > 17){
        return "es mayor de edad " + "\n" + persona2;

    }
    else{
        return "es menor de edad " + "\n" + persona2;
    }
}
function mayorEdad3(pnacimiento3,pactual){
    let nacimiento3=pnacimiento3;
    let alctual=pactual;
    persona3 =  alctual - nacimiento3

if (persona3 > 17){
    return "es mayor de edad " + "\n" + persona3;

}
else{
    return "es menor de edad " + "\n" + persona3;
}
}

function mayorEdadTotal(mayor1,mayor2,mayor3){
    let promedio = (mayor1 + mayor2 + mayor3)/3
    if (promedio > 17){
        return "el promedio es mayor de edad " + "\n" + promedio;

    }
    else{
        return "el promedio es menor de edad " + "\n" + promedio;
    }
}

/** fin funtion como parametro */


/** funtion como expresion */
const mayorEdad1Exp=function(pnacimiento1,pactual){
    let nacimiento1=pnacimiento1;
    let alctual=pactual;
    persona1 =  alctual - nacimiento1

    if (persona1 > 17){
        return "es mayor de edad " + "\n" + persona1;

    }
    else{
        return "es menor de edad " + "\n" + persona1;
    }
}
const mayorEdad2Exp=function(pnacimiento2,pactual){
    let nacimiento2=pnacimiento2;
    let alctual=pactual;
    persona2 =  alctual - nacimiento2
    if (persona2 > 17){
        return "es mayor de edad " + "\n" + persona2;

    }
    else{
        return "es menor de edad " + "\n" + persona2;
    }
}
const mayorEdad3Exp=function(pnacimiento3,pactual){
    let nacimiento3=pnacimiento3;
    let alctual=pactual;
    persona3 =  alctual - nacimiento3

if (persona3 > 17){
    return "es mayor de edad " + "\n" + persona3;

}
else{
    return "es menor de edad " + "\n" + persona3;
}
}

const mayorEdadTotalExp = function(mayor1,mayor2,mayor3){
    let promedioExp = (mayor1 + mayor2 + mayor3)/3
    if (promedioExp > 17){
        return "el promedio es mayor de edad " + "\n" + promedioExp;

    }
    else{
        return "el promedio es menor de edad " + "\n" + promedioExp;
    }
}

/** fin funtion como expresion */