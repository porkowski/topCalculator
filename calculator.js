//Functions for add, subtract, multiply and divide.


function operate(str) {
    let parameters = str.split(' ');
    let num1 = parseFloat(parameters[0]);
    let operator = parameters[1];
    let num2 = parseFloat(parameters[2]);
    console.log(num1,num2);
   
    if (operator == '/' && num2 == 0) return "IMPOSSIBLE";

    let solution =0;
    let strSolution ='';
    switch(operator) {
    
    case '+':
        solution = (num1+num2);
        strSolution = `${solution}`;
            //if solution has decimals, round to nearest 10th
            if (strSolution.indexOf('.') !== -1) {
                return solution.toFixed(2);
            } else {return solution};
        break;
    case '-':
        solution = (num1-num2);
        strSolution = `${solution}`;
            //if solution has decimals, round to nearest 10th
            if (strSolution.indexOf('.') !== -1) {
                return solution.toFixed(2);
            } else {return solution};
        break;
    case '*':
        solution = (num1*num2);
        strSolution = `${solution}`;
            //if solution has decimals, round to nearest 10th
            if (strSolution.indexOf('.') !== -1) {
                return solution.toFixed(2);
            } else {return solution};
        break;
    case '/':
        solution = (num1/num2);
        strSolution = `${solution}`;
            //if solution has decimals, round to nearest 10th
            if (strSolution.indexOf('.') !== -1) {
                return solution.toFixed(2);
            } else {return solution};
        break;
}
}

//grab display to DOM

let display = document.querySelector('span');
display.textContent = '';



let buttons = document.querySelectorAll('.btn');
buttons.forEach((button)=> {
button.addEventListener("mousedown",function() {

//Don't let display overflow
if (display.textContent.length == 11) {
    display.textContent;
}else {

    
if (button.textContent == '=') {
    display.textContent = operate(display.textContent);
} else if (button.textContent == 'CLEAR') {
    display.textContent = '';
} else if (button.textContent == 'RETURN') {
    let newDisplay = display.textContent;
    let lastChar = newDisplay.substring(newDisplay.length,newDisplay.length-1);
    //if the item to be deleted is an operator, it has two extra spaces. so 
    //would need to remove some extra characters form string
        if (lastChar == ' ') {
        display.textContent = newDisplay.substring(0,newDisplay.length-3);
        }else {
        display.textContent = newDisplay.substring(0,newDisplay.length-1);
        }
// Don't allow repeat operators directly after
}else if(button.id == "operator" ) {
    let newDisplay = display.textContent;
    let lastChar = newDisplay.substring(newDisplay.length,newDisplay.length-1);
        if (lastChar == ' ' | lastChar == '.'){
        display.textContent;

// Don't allow repeat operators at any point in the display
        }else if (newDisplay.indexOf("+") !== -1 |newDisplay.indexOf("-") !== -1 |newDisplay.indexOf("*") !== -1 | newDisplay.indexOf("/") !== -1 ){
        display.textContent;
        }else {display.textContent += button.textContent;}
// Don't allow repeat decimals directly after
}else if (button.id == "decimal" ){
    let newDisplay = display.textContent;
    let lastChar = newDisplay.substring(newDisplay.length,newDisplay.length-1);
    if (lastChar == '.') {
        display.textContent;
    }else {display.textContent += button.textContent}

}else{display.textContent += button.textContent;}
}
})
});