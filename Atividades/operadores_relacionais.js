//Atividade: Operadores de comparação (relacionais)
var num1, num2, res
num1=prompt("Digite um número");
num1=parseInt(num1);
num2=prompt("Digite outro número");
num2=parseInt(num2);
 
document.write("Rebeca Silva de Oliveira Feitosa, RA:922102612<br>");
document.write("Números digitados:<br>1º número: "+num1+"<br>2º número:"+num2+"<hr>");
 
res=(num1==num2);
document.write("Igualdade: "+res+"<br>");
res=(num1===num2);
document.write("Idêntico: "+res+"<br>");
res=(num1!=num2);
document.write("Não igual: "+res+"<br>");
res=(num1!==num2);
document.write("Não idêntico: "+res+"<br>");
res=(num1>num2);
document.write("Maior: "+res+"<br>");
res=(num1<num2);
document.write("Menor: "+res+"<br>");
res=(num1>=num2);
document.write("Maior ou igual: "+res+"<br>");
res=(num1<=num2);
document.write("Menor ou igual: "+res+"<br>");
