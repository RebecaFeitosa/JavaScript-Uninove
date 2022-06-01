const id_dv = document.querySelector("#dv");
const class_teste = document.querySelector(".teste");
const id_nome = document.querySelector("#nome");
const tag_h2 = document.querySelector("h2");

var notas=[10,9,8];
var outras_notas=[4,3,2,1];
// var notas direcionar para id="dv"
id_dv.innerHTML=notas;
id_dv.style.color="red";
var novas_notas=notas.concat(7,6,5);
//var novas_notas direcionar para class="teste"
class_teste.innerHTML=novas_notas;
var junta_tudo=novas_notas.concat(outras_notas);
//var junta_tudo direcionar para id="nome"
id_nome.value=junta_tudo;
tag_h2.innerHTML="teste123<br>outro teste";



/*
Fiz as referências:
const id_dv =document.querySelector("dv");
const class_teste = document.querySelector(".teste");
const id_nome = document.querySelector("#nome");

Fiz uma referência constante que substitui o
document.querySelector("...").innerHTML=

Portanto ao invés de:   document.querySelector("#dv").innerHTML=
ficará:     const id_dv = document.querySelector("#dv");
e assim tem maior liberdade para modificar pelo javaScript, código limpo.
*/