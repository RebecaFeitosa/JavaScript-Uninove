const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");
const tag_h2=document.querySelector("h2");

var valores=[10, 20, 30, 40, 50];

id_dv.innerHTML=valores;
valores.shift();

class_teste.innerHTML=valores;
valores.pop();

id_nome.value=valores;

/*
Shift: retira o primeiro elemento(valor) de um array

Pop: retira o último elemento de um array
*/