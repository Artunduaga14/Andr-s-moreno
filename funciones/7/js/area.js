/**
     * area de las figuras de un cuadrado,rectangulo,triagulo 
     * Autor: Juan David Artunduaga Gomez
     * Martes 9 de abril 2024
     */


/** funtion como parametro */
function Acuadrado(Plado,pcuadrado){
    let cuadrado = pcuadrado;
    let lado = Plado
    cuadrado = lado * lado
    return cuadrado  
}

function Arectangulo(Pbase,paltura,prectangulo){
    let rectangulo = prectangulo;
    let base = Pbase
    let altura = paltura
    rectangulo = base * altura
    return rectangulo  
}

function Atriangulo(Pbase,paltura,ptriangulo){
    let triagulo = ptriangulo;
    let base = Pbase
    let altura = paltura
    triagulo = (base * altura)/2
    return triagulo 
}
/** fin funtion como parametro */


/** funtion como expresion */
const AcuadradoExp = function(Plado,pcuadrado){
    let cuadrado = pcuadrado;
    let lado = Plado
    cuadrado = lado * lado
    return cuadrado  
}

const ArectanguloExp = function (Pbase,paltura,prectangulo){
    let rectangulo = prectangulo;
    let base = Pbase
    let altura = paltura
    rectangulo = base * altura
    return rectangulo  
}

const AtrianguloExp = function(Pbase,paltura,ptriangulo){
    let triagulo = ptriangulo;
    let base = Pbase
    let altura = paltura
    triagulo = (base * altura)/2
    return triagulo 
}
/** fin funtion como expresion */