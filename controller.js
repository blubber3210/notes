
function clearContent(){
    content = '';
    updateView();
}


// STRING METHODS EXAMPLES

function changeTextUppercase(){
    stringExample = stringExample.toUpperCase();
    updateView();
}

function changeTextLowercase(){
    stringExample = stringExample.toLowerCase();
    updateView();
}

// Operator Examples

// function setNum1(number){
//     num1 = number;
// }

// function setNum2(number){
//     num2 = number;
// }

// function setOperator(operator){
//     selectedOperator = operator;
// }

// function calculateNums(){
//     if (selectedOperator == '+'){
//         num1 += num2;
//     } else if (selectedOperator == '-'){
//         operatorResult = num1 - num2;
//     } else if (selectedOperator == '*'){
//         operatorResult = num1 * num2;
//     } else if (selectedOperator == '/'){
//         operatorResult = num1 / num2;
//     } else {
//         operatorResult = 'something went wrong';
//     }
//     updateView();
// }