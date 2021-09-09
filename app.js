let valueSaved = '', valueInput = 0, op = '';
let display = document.getElementById("display");
display.innerText = 0;

//Core Operations
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

function evaluate(op, num1, num2){
    let answer = 0;
    if(op === '+'){
        answer = add(num1, num2);
    }else if(op === '-'){
        answer = subtract(num1, num2);
    }else if(op === '*'){
        answer = multiply(num1, num2);
    }else if(op === '/'){
        answer = divide(num1, num2);
    }
    display.innerText = answer;
    valueInput = answer;
}  

//Updates values and display
function update(character){
    let tempStr = '' + valueInput;

    if(character === '+' || character === '-' || character === '*' || character === '/'){
        //Evaluates if there are multiple operations
        if(op !== ''){
            op = character;
            evaluate(op, valueSaved, valueInput);
            valueSaved = valueInput;
        }
        valueSaved = valueInput;
        op = character;
        valueInput = 0;
    //creates or checks for floats
    }else if(character === '.' || valueInput.isInteger == false){
        if(valueInput.isInteger == true){
            tempStr += character + 0;
        }else{
            tempStr += character;
        }
        valueInput = parseFloat(tempStr, 10);
    }else if (character !== '='){
        if(tempStr === '0'){
            tempStr = '';
        }
        tempStr += character;
        valueInput = parseInt(tempStr, 10);
    }

    if(valueSaved === 0){
        display.innerText = valueInput;
    }else{
        display.innerText = valueSaved + op + valueInput;
    }

    //Evaluates
    if(character === '='){
        evaluate(op, valueSaved, valueInput);
    }
}

function clears(){
    valueSaved = 0
    valueInput = 0
    op = '';
    display.innerText = 0;
}