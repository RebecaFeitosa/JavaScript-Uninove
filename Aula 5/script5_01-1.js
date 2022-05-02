/* 
    Estruturas de decisão: if 
    (com alterações)
*/

var a,b;
a=5;    //5 int
b="5";  //5 string
if (a===b) {    
    document.write("a = "+a+", b = "+b+"<br>");
    document.write("A variável a é")
}
document.write("<br>Continua...");  //será exibido independente da condição porque está fora da estrutura de decisão

/*  
    Quando a condição for FALSA: pula para fora das {} e o código continua
    Quando a condição for VERDADEIRA: executa tudo que estiver entre {} e o restante do código
*/
