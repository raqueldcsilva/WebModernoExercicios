/*Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores*/

function operacao(num1, num2){
    console.log(`A soma dos números ${num1} e ${num2} é : ` + (num1 + num2));
    console.log(`A subtração dos números ${num1} e ${num2} é : ` + (num1 - num2));
    console.log(`A multiplicação dos números ${num1} e ${num2} é : ` + (num1 * num2));
    console.log(`A divisão dos números ${num1} e ${num2} é : ` + (num1 / num2));
}

operacao(5, 7);