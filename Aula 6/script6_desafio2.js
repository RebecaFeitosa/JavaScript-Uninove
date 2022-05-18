var signo=["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"];
for(var i=0; i<signo.length; i++){
    document.querySelector(".teste").innerHTML+="&#"+(9800+i) + signo[i]+"<br>";
}

/*
Desafio 2:
De: 9800 até: 9811
Mostrar o Emoji e o signo ("string")
*/