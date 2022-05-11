var uf, i;
uf=["SP", "RJ", "SC", "MG"];
// i=0; colocar a posição da variável uf, assim não precisa colocar as posições no innerHTML
//Looping= valor inicial, condição e contador
for(i=0;i<4;i++){ //colocar a posição da variável uf no looping
document.querySelector("#dv1").innerHTML+=uf[i]+"<br>"; //saída valor que está na posição do i
}

/* 
document.querySelector("#dv1").innerHTML+=i+" ";
saída sera literalmente as posições, não os valores das posições
*/