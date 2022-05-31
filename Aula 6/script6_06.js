var frutas = ["Laranja", "Morango", "Melão", "Figo"];
var junto = frutas.toString();  //todos os valores da var frutas foram para a var junto, por causa do toString
document.querySelector("#dv").innerHTML=junto;
//document.querySelector(".teste").innerHTML=junto;


/*
Método toString: converte um array em 
uma string com valores separados por vírgula, ou seja,
pega todos os valores de determinada var array, 
direciona para uma var string, carrega todos esses valores
e imprime todos
*/  