function calc(operator, num1, num2){
    return_text = `${num1} ${operator} ${num2} = `;
    switch(operator){
        case '+':
            return return_text + (num1 + num2);
        case '-':
            return return_text + (num1 - num2);
        case '*':
            return return_text + (num1 * num2);
        case '/':
            return return_text + (num1 / num2);
        default:
            return 'Invalid operator';
    }
}

alert(calc('+', 1, 2));
alert(calc('-', 1, 2));
alert(calc('*', 1, 2));
alert(calc('/', 1, 2));

