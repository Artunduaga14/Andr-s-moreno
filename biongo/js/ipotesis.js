/**
 * hacer un bingo 
 * Autor: Juan David Artunduaga Gomez
 * Lunes 15 de julio 2024
 */

let bingo = [];
let interno = [];
let interacion1;
let interacion2;
let contador = 0;
let tabla;
let printResultado = '';

// Generar la tabla de bingo
for (interacion1 = 0; interacion1 < 5; interacion1++) {
    interno = [];
    for (interacion2 = 0; interacion2 < 5; interacion2++) {
        contador = contador + 1;
        tabla = contador * 3;
        interno.push(tabla);
    }
    bingo.push(interno);
}

// Botones para seleccionar filas y formas
printResultado += '<div class="btn-group" role="group" aria-label="Basic example">';
printResultado += '<button type="button" class="btn btn-primary" id="columna1">Fila 1</button>';
printResultado += '<button type="button" class="btn btn-primary" id="columna2">Fila 2</button>';
printResultado += '<button type="button" class="btn btn-primary" id="columna3">Fila 3</button>';
printResultado += '<button type="button" class="btn btn-primary" id="columna4">Fila 4</button>';
printResultado += '<button type="button" class="btn btn-primary" id="columna5">Fila 5</button>';
printResultado += '<button type="button" class="btn btn-primary" id="X1">Una X</button>';
printResultado += '</div>';

// Estructura del bingo
printResultado += '<table class="table">';
printResultado += '<thead>';
printResultado += '<tr>';
printResultado += '<th>B</th><th>I</th><th>N</th><th>G</th><th>O</th>';
printResultado += '</tr>';
printResultado += '</thead>';
printResultado += '<tbody>';
for (interacion1 = 0; interacion1 < 5; interacion1++) {
    printResultado += '<tr>';
    for (interacion2 = 0; interacion2 < 5; interacion2++) {
        let value = bingo[interacion1][interacion2];
        let clase = `cambio${interacion2 + 1}`;
        
        if (value % 2 === 1 && (interacion1 === interacion2 || interacion1 + interacion2 === 4)) {
            printResultado += `<td class="${clase} cambioX">${value}</td>`;
        } else {
            printResultado += `<td class="${clase}">${value}</td>`;
        }
    }
    printResultado += '</tr>';
}
printResultado += '</tbody>';
printResultado += '</table>';

document.getElementById("bingo").innerHTML = printResultado;

// Función para cambiar el color de las celdas
const changeColor = (elements, color) => {
    elements.forEach((element) => {
        element.style.color = "white";
        element.style.background = color;
        element.style.transition = "all 2s ease";
    });
};

// Asignar eventos a los botones de las filas
const buttons = ['columna1', 'columna2', 'columna3', 'columna4', 'columna5'];
buttons.forEach((btn, index) => {
    document.getElementById(btn).addEventListener("click", () => {
        let cambioFila = document.querySelectorAll(`.cambio${index + 1}`);
        cambioFila.forEach((element) => {
            element.style.color = "white";
            element.style.background = "#41b";
            element.style.transition = "all 2s ease";
        });
    });
});

// Botón para hacer una "X" con los números impares
let buttonX1 = document.getElementById('X1');
buttonX1.addEventListener("click", () => {
    let cambioX1 = document.querySelectorAll(".cambioX");
    changeColor(cambioX1, "#41b");
});
