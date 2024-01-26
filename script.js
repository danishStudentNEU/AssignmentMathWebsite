function addition(){
    var firstNumber, secondNumber, sum;
    firstNumber= Number(document.getElementById("firstNumber").value);
    secondNumber=Number(document.getElementById("secondNumber").value);
    sum = firstNumber + secondNumber;
    document.getElementById("sum").value = sum;
}

function multiplication(){
    var firstNumber, secondNumber, multiplication;
    firstNumber= Number(document.getElementById("firstNumber").value);
    secondNumber=Number(document.getElementById("secondNumber").value);
    multiplication = firstNumber * secondNumber;
    document.getElementById("multiplication").value = multiplication;
}