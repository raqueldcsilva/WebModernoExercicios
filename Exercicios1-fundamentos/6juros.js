/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capital, taxa, tempo){
    let finalSimples = capital + (capital * taxa * tempo)
    console.log("O cálculo de juros simples é " + finalSimples.toFixed(2));
}

function jurosComposto(capital, taxa, tempo){
    let finalComposto = capital * (1 + taxa) ** tempo;
    console.log("O cálculo de juros simples é " + finalComposto.toFixed(2));
}

jurosSimples(2000, 20, 40)
jurosSimples(100, 10, 10)
jurosComposto(2000, 20, 40)
jurosComposto(100, 10, 10)