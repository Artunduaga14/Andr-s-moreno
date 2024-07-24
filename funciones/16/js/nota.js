/**
     * porsentaje de 3 notas e imprimir si la nota es buena,media o mala
     * Autor: Juan David Artunduaga Gomez
     * Miercoles 10 de abril 2024
     */


/** funtion como parametro */
function notapor(pnota1,pnota2,pnota3){
    let nota1 = pnota1
    let nota2 = pnota2
    let nota3 = pnota3
    let promedio1 = nota1 * 0.2
    let promedio2 = nota2 * 0.35
    let promedio3 = nota3 * 0.45
    let sumapromedio = promedio1 + promedio2 + promedio3
    
    if(sumapromedio > 4.5){
        return "es una nota superior " + "\n" + sumapromedio
    }
    else{
        if(sumapromedio <= 4.5 && sumapromedio > 3.5){
            return "es una nota buena " + "\n" + sumapromedio
        }
        else{
            if(sumapromedio <= 3.5 && sumapromedio >= 3.0){
                return "es una nota media " + "\n" + sumapromedio
            }
            else{
                return "es una nota mala " + "\n" + sumapromedio
            }

        }
    }

}
/** fin funtion como parametro */


/** funtion como expresion */
const notaporExp=function(pnota1,pnota2,pnota3){
    let nota1 = pnota1
    let nota2 = pnota2
    let nota3 = pnota3
    let promedio1 = nota1 * 0.2
    let promedio2 = nota2 * 0.35
    let promedio3 = nota3 * 0.45
    let sumapromedio = promedio1 + promedio2 + promedio3
    
    if(sumapromedio > 4.5){
        return "es una nota superior " + "\n" + sumapromedio
    }
    else{
        if(sumapromedio <= 4.5 && sumapromedio > 3.5){
            return "es una nota buena " + "\n" + sumapromedio
        }
        else{
            if(sumapromedio <= 3.5 && sumapromedio >= 3.0){
                return "es una nota media " + "\n" + sumapromedio
            }
            else{
                return "es una nota mala " + "\n" + sumapromedio
            }

        }
    }

}

/** fin funtion como expresion */