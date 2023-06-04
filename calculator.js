//Functions for add, subtract, multiply and divide.


function operate(str) {
    let parameters = str.split(' ');
    console.log(parameters);
    let num1 = parseInt(parameters[0]);
    let operator = parameters[1];
    let num2 = parseInt(parameters[2]);
   

    switch(operator) {
    case '+':
        return num1 + num2;
        break;
    case '-':
        return num1 - num2;
        break;
    case '*':
        return num1 * num2;
        break;
    case '/':
        return num1 / num2;
        break; 
}
}

//grab display to DOM

let display = document.querySelector('span');
display.textContent = '';



let buttons = document.querySelectorAll('.btn');
buttons.forEach((button)=> {
button.addEventListener("mousedown",function() {


if (button.textContent == '=') {
    display.textContent = operate(display.textContent);
} else if (button.textContent == 'CLEAR') {
    display.textContent = '';
} else {
    display.textContent += button.textContent;
}
})
});