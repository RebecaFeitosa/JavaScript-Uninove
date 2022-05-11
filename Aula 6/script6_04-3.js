var meses, i;
meses=["Jan", "Fev", "Mar", "Abr", "Mai"];
for(i=0;i<5;i++){
    document.querySelector("#dv1").innerHTML+=meses[i]+" "; //todos os valores
}

/*
Criar um looping para mostrar os valores:
2 3 4
E direcionar a saída para <div id="dv1">
resposta: document.querySelector("#dv1").innerHTML+=i+" ";

for(valor_inicial;condicao;contador){
Valor inicial: i=2
Condição: i<5 ou i<=4
Contador: i++
}
*/