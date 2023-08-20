let firstNumber = Number(prompt("Insira o primeiro número:"))
let secondNumber = Number(prompt("Insira o segundo número:"))

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let mult = firstNumber * secondNumber
let div = firstNumber / secondNumber
let restOrDifference = firstNumber % secondNumber

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicacão dos dois números é: " + mult)
alert("A divisão dos dois números é:" + div)
alert("O resto da divisão dos dois números é: " + restOrDifference)

let evenOrOdd = sum % 2 == 0 ? "A soma dos dois números é par: " + sum : "A soma dos dois números é ímpar: " + sum

alert(evenOrOdd)

if (firstNumber == secondNumber) {
    alert("Os números inseridos são iguais:")
}