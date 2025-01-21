let operand1, operator, operand2;
let isCal = false;
operand1 = operator = operand2 = '';

function insert(data, type) {
    if(isCal) {
        return;
    }

    if(type === 'operand' && operator === '') {
        if(operand1.length > 7) {
            return;
        }
        if(data === '.' && operand1 === '') {
            return;
        } else if(data === '.' && operand1.includes('.')) {
            return;
        }
        operand1 += data.toString();
        document.querySelector('.input-box').innerHTML += data;
        return;
    }

    if(type === 'operand' && operator) {
        if(operand2.length > 7) {
            return;
        }
        if(data === '.' && operand2 === '') {
            return;
        } else if(data === '.' && operand2.includes('.')) {
            return;
        }
        // if(!operand2) {
        //     document.querySelector('.input-box').innerHTML = '';
        // }
        operand2 += data.toString();
        document.querySelector('.input-box').innerHTML += data;
        return;
    }
    
    if(!operator) {
        operator = data;
        document.querySelector('.input-box').innerHTML += data;
    }
}

function calculate() {
    if(!(operand1 && operator && operand2)) {
        return;
    }
    let result;
    

    switch(operator) {
        case '/':
            result = Number(operand1) / Number(operand2);
            break;
        case '*':
            result = Number(operand1) * Number(operand2);
            break;
        case '+':
            result = Number(operand1) + Number(operand2);
            break;
        case '-':
            result = Number(operand1) - Number(operand2);
            break;
    }
    console.log(operand1, operator, operand2, "=", result);
    document.querySelector('.input-box').innerHTML = result;
    isCal = true;
}

function clearScreen() {
    document.querySelector('.input-box').innerHTML = '';
    operand1 = operator = operand2 = '';
    isCal = false;
}