//Variáveis simples
var n, nome; 
n="João";
n="Abelardo";
n="Belarmina";
n="Pafuncio";

//Variável Array []
//      0           1           2           3
nome=["João", "Abelardo", "Belarmina", "Pafuncio"];
document.querySelector("#dv1").innerHTML=n; //exibe o último valor por ser variável simples
//document.querySelector(".teste").innerHTML=nome; //todos os nomes
document.querySelector(".teste").innerHTML=nome[0]+"<br>"+nome[1]; //nomes das posições selecionadas
//document.querySelector("h2").innerHTML=nome[2]; //substitui o valor do h2
document.querySelector("h2").innerHTML+=nome[2]; //atribui o valor ao invés de substituir
