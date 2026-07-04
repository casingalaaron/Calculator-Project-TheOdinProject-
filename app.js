const add = ((currentTotal, inputNumber) => currentTotal += inputNumber)
const subtract = ((currentTotal, inputNumber) => currentTotal -= inputNumber)
const multiply = ((currentTotal, inputNumber) => currentTotal *= inputNumber)
const divide = ((currentTotal, inputNumber) => currentTotal /= inputNumber)
function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2)
            break;
        case '-':
            return subtract(num1, num2)
            break;
        case '*':
            return multiply(num1, num2)
            break;
        case '÷':
            return divide(num1, num2)
            break;
    }
}

const buttons = document.querySelectorAll('button')
let inputHolder = ""
let currentBtnClick = ""
let total = 0
let currentTotal = 0
let result = document.querySelector('#result')
let operator = ""

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        currentBtnClick = button.dataset.button
        inputHolder += button.dataset.button
        result.textContent = inputHolder


        switch(currentBtnClick){
            case '+':
                result.textContent = currentBtnClick
                operator = currentBtnClick
                currentTotal += parseInt(inputHolder)
                inputHolder = ""
                break;
            case '-':
                result.textContent = currentBtnClick
                operator = currentBtnClick
                inputHolder = ""
                break;
            case '*':
                operator = button.dataset.button
                result.textContent = "\u002A"
                inputHolder = ""
                break;
            case '/':
                operator = button.dataset.button
                result.textContent = "\u00F7"
                inputHolder = ""
                break;
            case '=':
                total = operate(operator, parseInt(currentTotal), parseInt(inputHolder))
                result.textContent = total
                inputHolder = total
                break;
            case 'del':
                operator = button.dataset.button
                
                result.textContent = "+"
                inputHolder = ""
                break;
            case '%':
                operator = button.dataset.button
                result.textContent = "+"
                inputHolder = ""
                break;
            case 'ac':
                operator = button.dataset.button
                result.textContent = "+"
                inputHolder = ""
                break;
        }
    })
})