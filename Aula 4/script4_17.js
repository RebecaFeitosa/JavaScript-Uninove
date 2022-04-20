/*  Operadores lógicos
    OR (||)
    se pelo menos uma das condições for True, o resultado será True,
    só será false se as duas condições forem false
    resultado = T or False
*/
var a,b,c,d;
a=50;
b=120;
c=200;
d=(a<=b) ||  (a>=c); //True
document.write("d = "+d);