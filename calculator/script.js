
// function sum(num1, num2){
//     return num1 + num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }
// function multiply(num1, num2){
//     return num1 * num2;
// }
// function divide(num1, num2){
    
//     if (num2 == 0) {
//         return "Number cannot be divided by 0";
//     }
//     return num1 / num2;
// }

// let result;
// let prompt = require("prompt-sync")();
// let operator = prompt("Enter operator ( either +, -, *, /) : ");
// const num1 = parseFloat(prompt("Enter first number : "));
// const num2 = parseFloat(prompt("Enter second number : "));

// switch (operator) {
//     case "+": 
//         result = sum(num1,num2);
//         console.log(result);
//         break;

//     case "-": 
//         result = subtract(num1,num2);
//         console.log(result);
//         break;
    
//     case "*": 
//         result = multiply(num1,num2);
//         console.log(result);
//         break;

//     case "/": 
//         result = divide(num1,num2);
//         console.log(result);
//         break;

//     default:
//         break;
// }


function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Number cannot be divided by 0");
    }
    return num1 / num2;
}

const prompt = require("prompt-sync")();

function getNumberInput(message) {
    while (true) {
        const input = prompt(message);
        const parsedNumber = parseFloat(input);
        if (!isNaN(parsedNumber)) {
            return parsedNumber;
        }
        console.log("Invalid input. Please enter a valid number.");
    }
}

function getOperatorInput() {
    const validOperators = ["+", "-", "*", "/"];
    while (true) {
        const operator = prompt("Enter operator (either +, -, *, /) : ");
        if (validOperators.includes(operator)) {
            return operator;
        }
        console.log("Invalid operator. Please enter one of +, -, *, /.");
    }
}

let result;

try {
    const operator = getOperatorInput();
    const num1 = getNumberInput("Enter first number : ");
    const num2 = getNumberInput("Enter second number : ");

    switch (operator) {
        case "+":
            result = sum(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            throw new Error("Unexpected operator. This should never happen.");
    }

    console.log(`Result: ${result}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
