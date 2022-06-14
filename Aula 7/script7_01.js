/* -----------------------------------------
function boas_vindas()
Objetivo: Enviar mensagem de boas vindas
Data de criação: 16/05/2021
Data de alteração: 14/06/2022
Autor: Nome do autor
-------------------------------------------- */

function boas_vindas(pessoa) {
    document.write("Seja bem vindo(a): "+pessoa+"!");
    document.write("<hr>")
}//criação, ou, construir, ou, declara

function negrito(txt){
    document.write("<b>"+txt+"</b>");
}

function titulo2(tit){
    document.write("<h2>"+tit+"</h2>");
}


titulo2("Título 2");
boas_vindas("Jubileu");//executa, ou, chamada da função
negrito("Esse texto está em negrito");
titulo2("Último título 2");
