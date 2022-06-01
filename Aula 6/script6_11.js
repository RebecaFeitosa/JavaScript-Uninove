const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");
const tag_h2=document.querySelector("h2");

var uf=["SP", "RJ", "AC", "TO", "MG"];

id_dv.innerHTML=uf;
uf.sort();//ordenação crescente

class_teste.innerHTML=uf;
uf.reverse();//inverter o array

id_nome.value=uf;

/*
Sort: ordenação crescente, classificar em ordem alfabética (A-Z), 
não serve para números.

Reverse: reverter, inverte os valores da array, de trás para frente.


Reverse dica: Se ordenar antes(sort) aparecerá em ordem Z-A, 
se não usara o sort antes ele ira inverter o array
*/