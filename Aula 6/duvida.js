var uf=["SP","RJ","MG","ES","TO","PA","PR","AM","BA","PB"];
var txt="Hoje tem atividade!";
var class_teste=document.querySelectorAll(".teste");
for(var i=0;i<uf.length;i++){
    document.querySelector("#dv1").innerHTML+=uf[i]+"<br>";
}
document.querySelector("h2").innerHTML+=", "+uf.length;
// document.querySelector(".teste").innerHTML=txt;
class_teste[3].innerHTML=txt;
document.querySelector("h2").style.color="green";
class_teste[1].style.backgroundColor="brown";
document.querySelector("body").style.backgroundColor="azure";//whitesmoke
document.querySelector(".img").innerHTML="<img src='img/lake.jpg'>";