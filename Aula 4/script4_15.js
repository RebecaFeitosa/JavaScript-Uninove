/*  Operadores lógicos
    Not (!)
    se é verdadeiro vira falso,
    se é falso vira verdadeiro, 
    inverte o resultado da condição
    resultado = T or False
*/
var a,b,res;
a=9;
b=10;
res=!(a<b); //False, porque ! inverte o resultado
document.write("res = "+res);