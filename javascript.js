function performCalculation(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
		    return firstNumber + secondNumber;
		case '-':
		    return firstNumber - secondNumber;
		case 'x':
		    return firstNumber * secondNumber;
		case '÷':
            if (secondNumber === 0) return null
            else return firstNumber / secondNumber;
        default:
            return null
	}
}

const buttonContainer = document.querySelector('#button-container');
const screenContainer = document.querySelector('#screen');

let lastOperation = document.createElement('div');
let currentOperation = document.createElement('div');

lastOperation.id = 'last-operation';
currentOperation.id = 'current-operation';
currentOperation.textContent = '0';
screenContainer.appendChild(lastOperation);
screenContainer.appendChild(currentOperation);

const buttonDelete = document.createElement('button');
const buttonClear = document.createElement('button');

buttonDelete.textContent = 'DELETE';
buttonDelete.classList.add('top-button');
buttonDelete.id = 'delete-button';
buttonClear.textContent = 'CLEAR';
buttonClear.classList.add('top-button');
buttonClear.id = 'clear-button';

buttonContainer.appendChild(buttonDelete);
buttonContainer.appendChild(buttonClear);


let buttonList = ['+', '=', '0', '.', '-', '3', '2', '1', 'x', '6', '5', '4', '÷', '9', '8', '7'];
let operatorList = ['+', '-', '÷', 'x'];


for(let i = buttonList.length - 1; i >= 0; i--) {
    let button = document.createElement('button');
    button.classList.add('buttons');
    button.value = buttonList[i];
    if(operatorList.includes(button.value)) {
        button.classList.add('operators');
    }
    button.textContent = buttonList[i];
    buttonContainer.appendChild(button);
}
const buttonEquals = document.querySelector('button[value="="]');
buttonEquals.id = 'equals-button';

let numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let firstNumberList = [], secondNumberList = [];
let operator = null;

[...document.querySelectorAll('.buttons')].forEach(function(theButton) {
    theButton.addEventListener('click', function() {
        if(currentOperation.textContent == '0') {
            currentOperation.textContent = '';
            screenContainer.appendChild(currentOperation);
        }
        currentOperation.textContent += theButton.textContent;
        if(operatorList.includes(theButton.textContent)) {
            calculate();
            operator = theButton.textContent; 
        }
        else if(operator == null) {
            firstNumberList.push(theButton.textContent);
        }
        else if(theButton.textContent != '='){
            secondNumberList.push(theButton.textContent);
        }
        screenContainer.appendChild(currentOperation);
    });
});

var result;

function calculate() {
    if (operator && secondNumberList.length > 0) {
        let firstNumber = Number(firstNumberList.join(''));
        let secondNumber = Number(secondNumberList.join(''));
        result = Math.round(performCalculation(operator, firstNumber, secondNumber) * 100000000000) / 100000000000;

        firstNumberList = [result.toString()];
        secondNumberList = [];
    }
}

buttonEquals.addEventListener('click', function () {
    calculate();

    lastOperation.textContent = currentOperation.textContent;
    currentOperation.textContent = result;
    
    screenContainer.appendChild(lastOperation);
    screenContainer.appendChild(currentOperation);
});

buttonClear.addEventListener('click', function() {
    currentOperation.textContent = '0';
    lastOperation.textContent = '';
    firstNumberList = [];
    secondNumberList = [];
    operator = null;
    screenContainer.appendChild(lastOperation);
    screenContainer.appendChild(currentOperation);
})

buttonDelete.addEventListener('click', function() {
    currentOperation.textContent = currentOperation.textContent.slice(0, -1);
    screenContainer.appendChild(currentOperation);
})
