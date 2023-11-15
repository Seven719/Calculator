function performCalculation(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
		    return firstNumber + secondNumber;
		case '-':
		    return firstNumber - secondNumber;
		case '*':
		    return firstNumber * secondNumber;
		case '/':
		    return firstNumber / secondNumber;
	}
}
console.log(performCalculation('/', 6, 2));

let firstNumber, secondNumber, operator;

const buttonContainer = document.querySelector('#button-container');
const screenContainer = document.querySelector('#screen');

let lastOperation = document.createElement('div');
let currentOperation = document.createElement('div');

lastOperation.id = 'last-operation';
currentOperation.id = 'current-operation';
currentOperation.textContent = '0';
screenContainer.appendChild(lastOperation);
screenContainer.appendChild(currentOperation);
currentOperation.textContent = '';

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


for(let i = buttonList.length - 1; i >= 0; i--) {
    let button = document.createElement('button');
    button.classList.add('buttons');
    button.value = buttonList[i];
    button.textContent = buttonList[i];
    buttonContainer.appendChild(button);
}

let numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

[...document.querySelectorAll('.buttons')].forEach(function(theButton) {
    theButton.addEventListener('click', function() {
        if(theButton.textContent in numbersList) {
            currentOperation.textContent += (theButton.textContent);
            screenContainer.appendChild(currentOperation);
        }
    });
});

buttonClear.addEventListener('click', function() {
    currentOperation.textContent = '0';
    screenContainer.appendChild(currentOperation);
})

buttonDelete.addEventListener('click', function() {
    currentOperation.textContent = currentOperation.textContent.slice(0, -1);
    screenContainer.appendChild(currentOperation);
})
