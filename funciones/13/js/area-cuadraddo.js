/**
     * calcular el area de 3 cuadrados
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
function Acuadrado(Plado1,plado2,plado3){
    let cuadrado1;
    let cuadrado2;
    let cuadrado3;
    let lado1 = Plado1
    let lado2 = plado2
    let lado3 = plado3
    cuadrado1 = lado1 * lado1;
    cuadrado2 = lado2 * lado2;
    cuadrado3 = lado3 * lado3
    if(cuadrado1 == cuadrado2 && cuadrado1 == cuadrado3 && cuadrado3 == cuadrado2){
        return "los 3 ncuadrado son iguales" ;
    }
    else{
        if(cuadrado1 > cuadrado2 && cuadrado1 > cuadrado3){
            return "el area de la figura del cuadrado 1 es mayor: " + "\n" + cuadrado1;
        }
        else{
            if (cuadrado2 > cuadrado1 && cuadrado2 > cuadrado3){
                return "el area de la figura del cuadrado 2 es mayor: " + "\n" + cuadrado2;
            }
            else{
                return "el area de la figura del cuadrado 3 es mayor: " + "\n" + cuadrado3;
            }
        }
    }
}
/** fin funtion como parametro */


/** funtion como expresion */
const AcuadradoExp = function(Plado1,plado2,plado3){
    let cuadrado1;
    let cuadrado2;
    let cuadrado3;
    let lado1 = Plado1
    let lado2 = plado2
    let lado3 = plado3
    cuadrado1 = lado1 * lado1;
    cuadrado2 = lado2 * lado2;
    cuadrado3 = lado3 * lado3
    if(cuadrado1 == cuadrado2 && cuadrado1 == cuadrado3 && cuadrado3 == cuadrado2){
        return "los 3 ncuadrado son iguales" ;
    }
    else{
        if(cuadrado1 > cuadrado2 && cuadrado1 > cuadrado3){
            return "el area de la figura del cuadrado 1 es mayor: " + "\n" + cuadrado1;
        }
        else{
            if (cuadrado2 > cuadrado1 && cuadrado2 > cuadrado3){
                return "el area de la figura del cuadrado 2 es mayor: " + "\n" + cuadrado2;
            }
            else{
                return "el area de la figura del cuadrado 3 es mayor: " + "\n" + cuadrado3;
            }
        }
    }
}
/** fin funtion como expresion */