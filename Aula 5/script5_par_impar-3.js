//Mesmo enunciado mas feito com o operador ternario 

var num, msg;    
num=parseInt(prompt("Digite um número inteiro"));   

msg=(num%2==0)?"PAR":"ÍMPAR"; 
/*
se o resto da divisão for 0 é TRUE, se não for 0 é False, 
o que esta na frente de ? é TRUE       e o que esta na frente de : é FALSE
coloca a frase que quiser no true e no false, nesse caso ficou: par ou ímpar
*/

document.write(num+" - "+msg);