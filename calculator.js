//Functions for add, subtract, multiply and divide.


function operate(num1,operator,num2) {
    //take string such as '4*5' and split into three variables

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


let buttons = document.querySelectorAll('.btn')
buttons.addEventListener("mousedown", function (e) {
    console.log("hello")
})
