var semana=["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
for (var i= 0; i<7; i++){
    document.querySelector(".teste").innerHTML+=semana[i]+" é o "+(i+1)+" dia da semana!<br>";
}


//document.write(semana[i])+" é o "+(i+1)+"o dia da semana!<br>");
/*
mudaro document.write para querySelector dentro do looping
*/