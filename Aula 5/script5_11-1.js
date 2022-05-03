var i, j;
for (i=0; i<2; i++){ //externo, exemplo hora
 for (j=0; j<3; j++){ //interno, exemplo minuto
    document.write(i+" "+j+"<br>");
  }
}

/* Exemplo de loop aninhado
para cada 1 vez que executa o externo, executa todas as vezes o interno
exemplo: i externo e j interno
o i espera o j acabar para continuar
i  j
0  0
0  1
0  2
1  0
1  1
1  2
*/