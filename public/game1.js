var firstNumber = Math.floor(Math.random()*100);
document.getElementById("firstNb").innerHTML = firstNumber;
var secondNumber = Math.floor(Math.random()*100);
document.getElementById("secondNb").innerHTML = secondNumber;
var Operator = ['+','-','/','*'];
var resultOperator = Operator[Math.floor(Math.random()*(Operator.length))];
document.getElementById("Operator").innerHTML = resultOperator;

// if (resultOperator==='+'){
// console.log('add');
// }else if (resultOperator==='-'){
// console.log('subtract');
// }else if (resultOperator==='/'){
// console.log('divison');
// }else if(resultOperator==='*'){
// console.log('multiply');
// }
// else{
 
// }
    console.log(firstNumber+' '+resultOperator+' '+secondNumber);
