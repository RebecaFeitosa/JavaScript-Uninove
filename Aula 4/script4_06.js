/*
Operador de pós-incremento
soma 1 depois da variável: a++
mostra o valor da variável primeiro e depois soma
*/
var a;
a=prompt("Digite um número");
a=parseInt(a);
document.write("a ="+ (a++));
document.write("<br>a ="+ a);
