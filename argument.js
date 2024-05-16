// function addTwoNumber(number1, number2) {
//     console.log(number1, number2);
//     let total = number1 + number2;
//     total = number1 * number2;
//     total = number1 / number2;

//     return total;
// }
// let fristNumbern = 10;
// let secondNumber = 50;
// let result = addTwoNumber(secondNumber, fristNumbern);
// console.log( result);
let num1;
let num2;
let operator
function calc(num1, num2, operator) {
    if (operator == '+'){
        console.log(num1+num2);
    }else if (operator == '_'){
        console.log(num1_num2);
    }else if (operator == '*'){
        console.log(num1*num2);
    }else if (operator == '/'){
        console.log(num1/num2);
    }else {
        console.log("no operator selection");

    }

}
calc(50, 10, '+');
calc(50, 10, '-');
calc(50, 10, '*');
calc(50, 10, '/');
