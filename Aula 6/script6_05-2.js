//              0            1         2           3               4           5            6
var cidade=["São Paulo", "Campinas", "Sorocaba", "Guarulhos", "Pedreira", "Jaguariuna", "São Pedro"];
//Quantidade de valores // 7    //cidade.length
//última posição       // 6    //cidade.length-1 

document.querySelector("h1").innerHTML=cidade[2]+" - "+cidade[3];

document.querySelector("#dv1").innerHTML="A variável cidade tem "+cidade.length+" valores";  //nome_da_variavél_tipoarray.length traz a quantidade de valores na variável array

document.querySelector("h2").innerHTML+=" - "+cidade[5];

document.querySelector("h2").innerHTML+=" - "+cidade[cidade.length-1]

/* Desafios:
1- Mudar o conteúdo da tag h1, por Soroacaba - Guarulhos
solução: document.querySelector("h1").innerHTML=cidade[2]+" - "+cidade[3];

2- Mudar o conteúdo da tag div id="dv1" para mostrar a mensagem:
"A variável cidade tem 6 valores" o número tem que ser baseado na quantidade 
real de valores da var cidade tipo array
solução: document.querySelector("#dv1").innerHTML="A variável cidade tem "+cidade.length+" valores";

3- Incluir o último valor da var cidade na tag h2
solução: document.querySelector("h2").innerHTML+=" - "+cidade[5];
*/