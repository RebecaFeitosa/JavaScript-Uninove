var frutas = ["Laranja", "Morango", "Melão", "Figo", 7.5, 2022];
var junto = frutas.toString();  //todos os valores da var frutas foram para a var junto, por causa do toString
document.querySelector("#dv").innerHTML=junto;
//document.querySelector(".teste").innerHTML=junto;


/*
Método toString: converte um array em 
uma string com valores separados por vírgula, ou seja,
independente do tipo do valor, toString pega todos os valores 
de determinada var array, direciona para uma var string, 
carrega e imprime todos esses valores.
*/  