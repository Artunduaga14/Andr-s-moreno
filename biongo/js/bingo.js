/**
     * hacer un bingo 
     * Autor: Juan David Artunduaga Gomez
     * Lunes 15 de julio 2024
     */

let bingo=[];
let interno =[];
let interacion1;
let interacion2;
let contador = 0;
let tabla;
let cantidadPares = 0;
let cantidadImpares = 0;
let printResultado = ''
//columna
const numero = [
    [1,1,0,1,1],
    [1,1,1,1,1],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,1,0,1,1]
]
//numero2 son las 3 x
const numero2 =[
    [0,0,0,0,0],
    [1,1,0,1,1],
    [0,0,1,0,0],
    [1,1,1,1,1],
    [1,1,0,1,1]
]
//numero3 es x grande
const numero3 = [
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,0,1,0,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
]
// operacion del bingo
for(interacion1 = 0; interacion1<5;interacion1++){
    interno=[]; 
    for(interacion2 = 0;interacion2<5;interacion2++ ){
       contador = contador+1;
       tabla = contador*3;
       interno.push(tabla);
    }
    bingo.push(interno);
    console.log(bingo)
}

// boton para otros bingos 
printResultado +='<div class="btn-group" role="group" aria-label="Basic example">'
printResultado +='<button type="button" class="btn btn-primary" id="colorblanco">borrador</button>'
printResultado +='<button type="button" class="btn btn-primary" id="X1">Una X1</button>'
printResultado +='<button type="button" class="btn btn-primary" id="X3">Tres X3</button>'
printResultado +='</div>'

// estructura del bingo
printResultado += '<table class="table">'
printResultado += '<thead>'
printResultado += '<tr>'
printResultado += ` <th id="columna1" >B</th>
                    <th id="columna2" >I</th>
                    <th id="columna3" >N</th>
                    <th id="columna4" >G</th>
                    <th id="columna5" >O</th>`
printResultado += '</tr>'
printResultado += '</thead>'
printResultado += ' <tbody>'
for(interacion1 = 0; interacion1<5;interacion1++){
    printResultado += '<tr>'
    for(interacion2 = 0;interacion2<5;interacion2++ ){
        if(bingo[interacion1][interacion2]%2==numero[interacion1][interacion2]){
            if(bingo[interacion1][interacion2]%2==numero3[interacion1][interacion2]){
                printResultado +=`<td class="cambio${interacion2+1} color cambioX">${bingo[interacion1][interacion2]}</td>`
            }else{
                printResultado +=`<td class="cambio${interacion2+1} cambioX">${bingo[interacion1][interacion2]}</td>`
            }
        }else{
            if(bingo[interacion1][interacion2]%2==numero2[interacion1][interacion2]){
                printResultado +=`<td class="cambio${interacion2+1} cambioX3">${bingo[interacion1][interacion2]}</td>`
            }else{
                if(bingo[interacion1][interacion2]%2==numero3[interacion1][interacion2]){
                    printResultado +=`<td class="cambio${interacion2+1} color ">${bingo[interacion1][interacion2]}</td>`
                }else{
                    printResultado +=`<td class="cambio${interacion2+1}">${bingo[interacion1][interacion2]}</td>`
                }
            }
        }
    }
    printResultado += '</tr>'
}
printResultado += ' </tbody>'
printResultado += '</table>'


document.getElementById("bingo").innerHTML=printResultado

// boton de fila 1
let button1 = document.getElementById('columna1')
button1.addEventListener("click",()=>{
let cambio1 = document.querySelectorAll(".cambio1")
cambio1.forEach((Element)=>{
    Element.style.color= "white"
    Element.style.background = "#41b"
    Element.style.transition = "all 2s ease" 
})
let cambio2 = document.querySelectorAll(".cambio2")
cambio2.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio3 = document.querySelectorAll(".cambio3")
cambio3.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease"
})
let cambio4 = document.querySelectorAll(".cambio4")
cambio4.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio5 = document.querySelectorAll(".cambio5")
cambio5.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
})

// boton de fila 2
let button2 = document.getElementById('columna2')
button2.addEventListener("click",()=>{
    let cambio2 = document.querySelectorAll(".cambio2")
    cambio2.forEach((Element)=>{
        Element.style.color= "white"
        Element.style.background = "#41b"
        Element.style.transition = "all 2s ease"
    })
    let cambio1 = document.querySelectorAll(".cambio1")
    cambio1.forEach((Element)=>{
        Element.style.color= "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease" 
    })
    let cambio3 = document.querySelectorAll(".cambio3")
    cambio3.forEach((Element)=>{
        Element.style.color= "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease"
    })
    let cambio4 = document.querySelectorAll(".cambio4")
    cambio4.forEach((Element)=>{
        Element.style.color= "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease" 
    })
    let cambio5 = document.querySelectorAll(".cambio5")
    cambio5.forEach((Element)=>{
        Element.style.color= "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease" 
    })
})

// boton de fila 3
let button3 = document.getElementById('columna3')
button3.addEventListener("click",()=>{
    let cambio3 = document.querySelectorAll(".cambio3")
    cambio3.forEach((Element)=>{
        Element.style.color= "white"
        Element.style.background = "#41b"
        Element.style.transition = "all 2s ease"
    })
    let cambio1 = document.querySelectorAll(".cambio1")
    cambio1.forEach((Element)=>{
        Element.style.color= "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease" 
    })
    let cambio2 = document.querySelectorAll(".cambio2")
    cambio2.forEach((Element)=>{
        Element.style.color= "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease" 
    })
    let cambio4 = document.querySelectorAll(".cambio4")
    cambio4.forEach((Element)=>{
        Element.style.color= "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease" 
    })
    let cambio5 = document.querySelectorAll(".cambio5")
    cambio5.forEach((Element)=>{
        Element.style.color= "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease" 
    })
})

// boton de fila 4
let button4 = document.getElementById('columna4')
button4.addEventListener("click",()=>{
let cambio4 = document.querySelectorAll(".cambio4")
cambio4.forEach((Element)=>{
    Element.style.color= "white"
    Element.style.background = "#41b"
    Element.style.transition = "all 2s ease"
})
let cambio1 = document.querySelectorAll(".cambio1")
cambio1.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio2 = document.querySelectorAll(".cambio2")
cambio2.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio3 = document.querySelectorAll(".cambio3")
cambio3.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio5 = document.querySelectorAll(".cambio5")
cambio5.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
})

// boton de fila 5
let button5 = document.getElementById('columna5')
button5.addEventListener("click",()=>{
let cambio5 = document.querySelectorAll(".cambio5")
cambio5.forEach((Element)=>{
    Element.style.color= "white"
    Element.style.background = "#41b"
    Element.style.transition = "all 2s ease"
})
let cambio1 = document.querySelectorAll(".cambio1")
cambio1.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio2 = document.querySelectorAll(".cambio2")
cambio2.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio3 = document.querySelectorAll(".cambio3")
cambio3.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio4 = document.querySelectorAll(".cambio4")
cambio4.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
})
// boton de fila 6
let button6 = document.getElementById('colorblanco')
button6.addEventListener("click",()=>{
let blanco = document.querySelectorAll(".blanco")
blanco.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio1 = document.querySelectorAll(".cambio1")
cambio1.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio2 = document.querySelectorAll(".cambio2")
cambio2.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio3 = document.querySelectorAll(".cambio3")
cambio3.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio4 = document.querySelectorAll(".cambio4")
cambio4.forEach((Element)=>{
    Element.style.color= "#000"
    Element.style.background = "white"
    Element.style.transition = "all 2s ease" 
})
let cambio5 = document.querySelectorAll(".cambio5")
    cambio5.forEach((Element)=>{
        Element.style.color= "#000"
        Element.style.background = "white"
        Element.style.transition = "all 2s ease" 
    })
})

 // boton de una X
let buttonX1 = document.getElementById('X1')
buttonX1.addEventListener("click",()=>{
let cambioX1 = document.querySelectorAll(".cambioX")
cambioX1.forEach((Element)=>{
    Element.style.color= "white"
    Element.style.background = "#41b"
    Element.style.transition = "all 2s ease"
})
})


// botones de 3X
let buttonX3 = document.getElementById('X3')
buttonX3.addEventListener("click",()=>{
let cambioX3 = document.querySelectorAll(".cambioX3")
let color = document.querySelectorAll(".color")
    cambioX3.forEach((Element)=>{
        Element.style.color= "white"
        Element.style.background = "rgb(40 128 128)"
        Element.style.transition = "all 2s ease"
    })
    color.forEach((Element)=>{
        Element.style.color= "white"
        Element.style.background = "#0d6efd"
        Element.style.transition = "all 2s ease"
    })
})