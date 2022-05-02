//Minimizar/reduzir o código, simplificação de código

var num;    //tirou o calc
num=parseInt(prompt("Digite um número inteiro"));   //a variável num recebe um número inteiro que foi digitado pelo prompt

if(num%2==0){   //se o num resto da divisão por 2 for igual a 0 é par...
    document.write(num+" - PAR");
}
else{   //...senão é ímpar
    document.write(num+" - ÍMPAR");
}