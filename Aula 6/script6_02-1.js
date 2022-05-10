var x=[2020, 2, "Hoje"];
x[0]++;
x[1]=x[0]%2;
x[2]+=" em dia";
document.querySelector("#dv1").innerHTML=x[0]+"---"+x[1];
document.querySelector(".teste").innerHTML=x[2];

/* 
Desafio:
1-x[0] e x[1] saída na área laranja
2- x[2] saída na área aqua

Comando de saída antigo:
document.write(x[0]+"<br>");
document.write(x[1]+"<br>");
document.write(x[2]+"<br>");
*/
