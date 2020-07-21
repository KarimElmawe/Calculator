let digitScreen = document.querySelector('.digits');
let zeroDigitScreen = document.querySelector('.zero-digit');
let deleteNumbers = document.querySelector('.del');
let numbers = document.querySelectorAll('.numbers');
let clearNumbers = document.querySelector('.clear');
let divideOperator = document.querySelector('.divide');
let multiplyOperator = document.querySelector('.multi');
let minusOperator = document.querySelector('.minus');
let plusOperator = document.querySelector('.plus');
let equalOperator = document.querySelector('.equal');
let buttonClickColor = document.querySelector('.operations');
let sum,sum1,sum2,addChecker,minusChecker,divideChecker,multiplyChecker;  // sum1 is the first entered numbers

function clickHandlerColor (buttonClicked) { // make blur after click
    window.setTimeout(function() {
        buttonClicked.blur();        
    },1);
}


for (var i = 0 ; i < numbers.length; i++) {                     
   numbers[i].addEventListener('click', enterNumbers);
}

function enterNumbers() {
    zeroDigitScreen.textContent = '';
    digitScreen.textContent += `${this.textContent}`;
    for (var i = 0 ; i < numbers.length; i++) {                     
        clickHandlerColor (numbers[i]);
     }
}

clearNumbers.addEventListener('click', clear);

function clear() { 
    zeroDigitScreen.textContent = '0';
    digitScreen.textContent = '';
    clickHandlerColor (clearNumbers);
    zeroDigitScreen.style.visibility = "inherit"
    zeroDigitScreen.style.display = "block"  
}

deleteNumbers.addEventListener('click', remove);  

function remove() {
       if (digitScreen.textContent.length == "1") {
        clear();
    } 
    else if (digitScreen.textContent.length > "1" ) {
        var removeDigits = digitScreen.textContent.slice(0, -1);
        digitScreen.textContent = removeDigits;
    }
    clickHandlerColor (deleteNumbers);
}


/*********************** Operators ****************/


// every function have 4 checker to separate the operators.


divideOperator.addEventListener('click', divide); 

function divide() {
    sum1 = digitScreen.textContent;
    clear();
    addChecker = 0;
    minusChecker = 0;
    multiplyChecker = 0;
    divideChecker = 1;
    clickHandlerColor (divideOperator);
}

multiplyOperator.addEventListener('click', multiply); 

function multiply() {
    sum1 = digitScreen.textContent;
    clear();
    addChecker = 0;
    minusChecker = 0;
    multiplyChecker = 1;
    divideChecker = 0;
    clickHandlerColor (multiplyOperator);
}

minusOperator.addEventListener('click', minus); 

function minus() {
    sum1 = digitScreen.textContent;
    clear();
    addChecker = 0;
    minusChecker = 1;
    multiplyChecker = 0;
    divideChecker = 0;
    clickHandlerColor (minusOperator);
}

plusOperator.addEventListener('click', add); 

function add() {
    sum1 = digitScreen.textContent;
    clear();
    addChecker = 1;
    minusChecker = 0;
    multiplyChecker = 0;
    divideChecker = 0;
    clickHandlerColor (plusOperator);
}

equalOperator.addEventListener('click', equal);

function equal() {     
    zeroDigitScreen.style.visibility = "hidden"
    zeroDigitScreen.style.display = "none"                           // Checker for which operator run
    sum2 = digitScreen.textContent; // sum2 is the second entered numbers
    if (addChecker === 1 && minusChecker === 0 && multiplyChecker === 0 && divideChecker === 0) {
        sum = +sum1 + +sum2;
        digitScreen.textContent = sum;
    }
    else if (addChecker === 0 && minusChecker === 1 && multiplyChecker === 0 && divideChecker === 0) {
        sum = +sum1 - +sum2;
        digitScreen.textContent = sum;
    }   
    else if (addChecker === 0 && minusChecker === 0 && multiplyChecker === 1 && divideChecker === 0) {
        sum = +sum1 * +sum2;
        digitScreen.textContent = sum;
    }  
    else if (addChecker === 0 && minusChecker === 0 && multiplyChecker === 0 && divideChecker === 1) {
        sum = +sum1 / +sum2;
        digitScreen.textContent = sum;
    }   
    clickHandlerColor (equalOperator);
}

