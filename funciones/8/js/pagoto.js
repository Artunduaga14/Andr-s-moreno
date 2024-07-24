/**
     * pago total de una persona - dias trabajados, salud, pensio, arl 
     * Autor: Juan David Artunduaga Gomez
     * Martes 9 de abril 2024
     */


/** funtion como parametro */
function salario(pdiastra, pvalordias){
    let psalario
    let diastra = pdiastra
    let valordias = pvalordias
    psalario = diastra * valordias
    return psalario
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

function pensionTotal(pdiastra,pvalordias){
    let pensionT
    let psalud = salud(pdiastra, pvalordias)
    let ppension = pension(pdiastra, pvalordias)
    let parl = arl(pdiastra, pvalordias)
    let psalario = salario(pdiastra, pvalordias)
    pensionT = psalario - (psalud + ppension + parl) 
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

const pensionTotalExp = function(pdiastra,pvalordias){
    let pensionT
    let psalud = saludExp(pdiastra, pvalordias)
    let ppension = pensionExp(pdiastra, pvalordias)
    let parl = arlExp(pdiastra, pvalordias)
    let psalario = salarioExp(pdiastra, pvalordias)
    pensionT = psalario - (psalud + ppension + parl) 
    return pensionT 

}
/** fin funtion como expresion */