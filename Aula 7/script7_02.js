function media(nota1, nota2, nota3) {
    return (nota1+nota2+nota3)/3;
    //return "Eita!!!";
} 
/*
usa o return dentro da função, não usa comando de saída
o return tem que devolver o valor para alguém
*/

var num = media (8, 7, 9); 
document.write ("Num = "+num+"<br>"); 
document.write ("Média Final: "+media(9, 7, 9));

/*
valores das notas atribuídos dentro do ()
o comando de saída que eu preferir será usado fora da função
*/
