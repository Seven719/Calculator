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
const buttonDelete = document.createElement('button');
const buttonClear = document.createElement('button');
buttonDelete.textContent = 'DELETE';
buttonClear.textContent = 'CLEAR';
buttonDelete.classList.add('top-button');
buttonClear.classList.add('top-button');
buttonDelete.id = 'delete-button';
buttonClear.id = 'clear-button';
buttonContainer.appendChild(buttonDelete);
buttonContainer.appendChild(buttonClear);


let buttonList = ['+', '=', '0', '.', '-', '3', '2', '1', 'x', '6', '5', '4', '÷', '9', '8', '7'];

for(let i = buttonList.length - 1; i >= 0; i--) {
    let button = document.createElement('button');
    button.classList.add('buttons');
    button.textContent = buttonList[i];
    buttonContainer.appendChild(button);
}
