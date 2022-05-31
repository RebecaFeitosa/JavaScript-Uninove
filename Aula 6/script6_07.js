var x = [31, 05, 2022]; 
var novaLista = x.join('/');
document.querySelector(".teste").innerHTML=novaLista;
/* 
0 não aparece porque é um número inteiro, 
zero a esquerda não tem referência em números inteiros, 
a menos que coloque "05"
*/

/*
Método join: adiciona o caracter entre () entre os valores 
que estão dentro da var array, como se ele ocupasse o valor da vírgula.
Para o join funcionar precisa ter no mínino dois valores.
*/
