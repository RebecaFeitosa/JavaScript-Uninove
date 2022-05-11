var num=[10,20,30,40,50];
var tam;
tam=num.length;

document.querySelector("#dv1").innerHTML+="Var num possui "+tam+" valores<hr>";
document.querySelector("#dv1").innerHTML+="Todos os valores da var num: "+num+"<hr>";
document.querySelector(".teste").innerHTML+="Valor da primeira posição de num: "+num[0]+"<hr>";
document.querySelector(".teste").innerHTML+="Valor da última posição de num: "+num[tam-1]+"<hr>";
document.querySelector("h2").innerHTML+="<hr>"+num;

/*
document.write("var num possui "+tam+" valores<hr>");
document.write("Todos os valores da var num: "+num+"<hr>");
document.write("Valor da primeira posição de num: "+num[0]+"<hr>");
document.write("Valor da última posição de num: "+num[tam-1]+"<hr>");

Exercício:
dois primeiros document.write direcionar para id="dv1"
dois último document.write direcionar para class="teste"
direcionar todos os valores da var num para h2
*/