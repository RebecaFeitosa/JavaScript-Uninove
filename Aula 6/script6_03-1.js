//Criação de variáveis tipo array de 3 maneiras diferentes

var nota=[10,8.5,7.75,9.5]; //variável do tipo array com alocação dos valores na horizontal separados por vírgulas

var num=[]; //variável do tipo array sem ter alocação de nenhum valor, e as atribuições são colocadas na sequência
num[0]=120; //valores atribuídos de maneira individual
num[1]=200;
num[2]=2020;

var nome=new Array("Jose","Paula","Carla"); //new array: referência de criação de objeto, não é tão utilizado

nota=[]; //acabou de apagar o conteúdo de uma variável array
document.querySelector("#dv1").innerHTML=nota+"<br>"+num;
document.querySelector(".teste").innerHTML=nome;
/*
Comando de saída antigo
document.write(nota+"<hr>");
document.write(num+"<hr>");
document.write(nome+"<hr>");
*/