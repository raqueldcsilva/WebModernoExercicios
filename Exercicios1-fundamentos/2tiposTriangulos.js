/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/
function tipoQuadrado(a, b, c) {
    if (a < (b + c) && b < (a + c) && c < (a + b)){
        if (a == b && b == c){
            console.log("O triângulo é Equilátero");
        }
        else if (a == b || a == c || b == c ){
            console.log("O triangulo é Isósceles");
        }
        else{
            console.log("O triângulo é Escaleno");
        }
    }
}

tipoQuadrado(4, 4, 4)//1 opção
tipoQuadrado(4, 6, 4)//2 opção
tipoQuadrado(4, 5, 6)//3 opção