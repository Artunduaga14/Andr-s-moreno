/**
     * realizar un programa que calcule el pago de un empleado teniendo en cuanta unos factores
     * Autor: Juan David Artunduaga Gomez
     * Lunes 9 de abril 2024
     */


/** funtion como parametro */
function salario(pdiastra, pvalordias){
    let psalario
    let diastra = pdiastra
    let valordias = pvalordias
    psalario = diastra * valordias
    return psalario
}
function subsidiotras(pdiastra, pvalordias){
    let salarioM = 1300000
    let psalario = salario(pdiastra, pvalordias)
    let psubsidiotras
    if (psalario > salarioM *2){
        psubsidiotras = 0
    }
    else{
        psubsidiotras = 114000
    }

    return  psubsidiotras
}

function salud(pdiastra, pvalordias){
    let psalud
    psalud = salario(pdiastra, pvalordias)*0.12
    return psalud
}
function pension(pdiastra, pvalordias){
    let pensionv
    pensionv = salario(pdiastra, pvalordias)*0.16
    return pensionv
}

function arl(pdiastra, pvalordias){
    let arlv
    arlv = salario(pdiastra, pvalordias)*0.052
    return arlv
}

function retencion(pdiastra, pvalordias){
    let salarioM = 1300000
    let psalario = salario(pdiastra, pvalordias)
    let pretencion
    if (psalario > salarioM *4){
        pretencion = psalario * 0.04
    }
    else{
       pretencion  = 0
    }

    return  pretencion 
}

function deducibles(pdiastra,pvalordias){
    let pensionT
    let psalud = salud(pdiastra, pvalordias)
    let ppension = pension(pdiastra, pvalordias)
    let parl = arl(pdiastra, pvalordias)
    let psalario = salario(pdiastra, pvalordias)
    let psubsidiotras = subsidiotras(pdiastra, pvalordias)
    let pretencion = retencion(pdiastra, pvalordias) 
    pensionT = psalario + psubsidiotras - (psalud + ppension + parl + pretencion) 
    return pensionT 

}
/** fin funtion como parametro */


/** funtion como expresion */
const salarioExp = function(pdiastra, pvalordias){
    let psalario
    let diastra = pdiastra
    let valordias = pvalordias
    psalario = diastra * valordias
    return psalario
}
const subsidiotrasExp= function(pdiastra, pvalordias){
    let salarioM = 1300000
    let psalario = salario(pdiastra, pvalordias)
    let psubsidiotras
    if (psalario > salarioM *2){
        psubsidiotras = 0
    }
    else{
        psubsidiotras = 114000
    }

    return  psubsidiotras


}

const saludExp = function(pdiastra, pvalordias){
    let psalud
    psalud = salario(pdiastra, pvalordias)*0.12
    return psalud
}
const pensionExp = function(pdiastra, pvalordias){
    let pensionv
    pensionv = salario(pdiastra, pvalordias)*0.16
    return pensionv
}

const arlExp = function(pdiastra, pvalordias){
    let arlv
    arlv = salario(pdiastra, pvalordias)*0.052
    return arlv
}

const retencionExp = function(pdiastra, pvalordias){
    let salarioM = 1300000
    let psalario = salario(pdiastra, pvalordias)
    let pretencion
    if (psalario > salarioM *4){
        pretencion = psalario * 0.04
    }
    else{
        pretencion = 0
    }

    return  pretencion


}

const deduciblesExp = function(pdiastra,pvalordias){
    let pensionT
    let psalud = salud(pdiastra, pvalordias)
    let ppension = pension(pdiastra, pvalordias)
    let parl = arl(pdiastra, pvalordias)
    let psalario = salario(pdiastra, pvalordias)
    let psubsidiotras = subsidiotras(pdiastra, pvalordias)
    let pretencion = retencion(pdiastra, pvalordias) 
    pensionT = psalario + psubsidiotras - (psalud + ppension + parl + pretencion) 
    return pensionT 

}
/** fin funtion como expresion */