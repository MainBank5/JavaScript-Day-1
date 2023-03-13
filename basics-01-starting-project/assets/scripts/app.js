const defaultResult = 0;

let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
    //alert('The results are' + result);
}

//you can store the function output in a variable or constant
//const additionResult = add( 5, 8);
currentResult = add(8, 2);

//currentResult = currentResult + 10 *3 / 2 - 1;

//let calculationDescription =`( + ${defaultResult} + 10) * 3/2 - 1`;

let calculationDescription ='(' + defaultResult + ' + 10) * 3/2 -1 ';

outputResult(currentResult, calculationDescription);

