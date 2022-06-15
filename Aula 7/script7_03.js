function calc(n1, n2,op){
    if(op=="+"){
        return n1+n2;
    }
    else if(op=="-"){
        return n1-n2;
    }
    else if(op=="*"){
        return n1*n2;
    }
    else if (op=="/"){
        return n1/n2;
    }
    else if(op=="%"){
        return n1%n2;
    }
    else{
        return "Operação inválida";
    }
}

var num1=parseFloat(prompt("Digite um número"));
var num2=parseFloat(prompt("Digite outro número"));
var operador=prompt("Digite o operador");
document.write("1° Número: "+num1+"<br> 2° Número: "+num2+"<br> Cálculo: "+calc(num1,num2,operador));
