function add(n1, n2, showResult) {
    if (typeof n1 != 'number' || typeof n2 != 'number') {
        throw new Error('Incorrect input!');
    }
    if (showResult) {
        console.log('Result is: ' + (n1 + n2));
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 10.4;
var printResult = true;
var result = add(number1, number2, printResult);
