const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

// Función para realizar la suma
function add(a, b) {
    return a + b;
}

// Función para realizar la resta
function subtract(a, b) {
    return a - b;
}

// Función para realizar la multiplicación
function multiply(a, b) {
    return a * b;
}

// Función para realizar la división
function divide(a, b) {
    return a / b;
}

// Función principal que realiza las operaciones
function calculate() {
    display.value = eval(display.value);
}

// Función para capturar una entrada mediante prompt
function promptForNumber() {
    const userInput = prompt("Introduce un número para la nueva función:");
    const number = parseFloat(userInput);

    if (!isNaN(number)) {
        const squareResult = squareNumber(number);
        const sqrtResult = sqrtNumber(number);

        alert(`√${number}: ${sqrtResult}\nx²${number}: ${squareResult}`);
    } else {
        alert("Entrada no válida. Introduce un número válido.");
    }
}

function squareNumber(number) {
    return number * number;
}

function sqrtNumber(number) {
    return Math.sqrt(number);
}

document.getElementById("prompt").addEventListener("click", promptForNumber);

// Asociar eventos a los botones
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            calculate();
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else if (btn.id === "prompt") {
            promptInput();
        } else {
            display.value += btn.id;
        }
    });
});
