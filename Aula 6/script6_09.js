const id_dv=document.querySelector("#dv");
const class_teste=document.querySelector(".teste");
const id_nome=document.querySelector("#nome");
const tag_h2=document.querySelector("h2");

var login=["admin", "root"];

id_dv.innerHTML=login;
login.push("Astrogildo");

class_teste.innerHTML= login;
login.unshift("Belinha");

id_nome.value=login;

/*
O valor que está dentro do push vai aparecer no final do conteúdo da array

O valor que está dentro de unshift aparece no começo do contéudo da arraya

ou seja adiciona valores nas extremidades.
*/