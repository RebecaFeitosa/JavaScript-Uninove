/*  Operadores lógicos
    And (&&)
    só será True quando as duas condições forem True
    se tiver um único False, o resultado sera false
    resultado = T or False
*/
var a,b,c,d;
a=50;
b=120;
c=200;
d=(a<=b) && (a>=c); //d=(T)&&(F) então Falso
document.write("d = "+d);