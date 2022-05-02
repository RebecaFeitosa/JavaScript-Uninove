/*
Elaborar um código Javascript para dado um número inteiro, 
verificar se o número é PAR ou ÍMPAR. 
A saída deverá mostrar o número e mostrar PAR ou ÍMPAR, 
como mostrado a seguir:
275 - ÍMPAR
28 - PAR
*/

//Código "longo" para quem tem dificuldade em aprender

var num, calc;
num=prompt("Digite um número inteiro");
num=parseInt(num);

calc=num%2;

if(calc==0){
    document.write(num+" - PAR");
}
else{
    document.write(num+" - ÍMPAR");
}

/*
Enunciado interpretado com explicações entre()

Elaborar um código Javascript para dado um número inteiro(uma entrada int), 
verificar se o número é PAR ou ÍMPAR(calcular o resto da divisão por 2, se o resto for 0, é par, se o resto>0 é ímpar). 
A saída deverá mostrar o número e mostrar PAR ou ÍMPAR, 
como mostrado a seguir:
275 - ÍMPAR
28 - PAR
*/