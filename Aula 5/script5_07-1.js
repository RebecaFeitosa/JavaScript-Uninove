var destino, aux;
destino=prompt("Digite seu destino: ");
aux=destino.toUpperCase(); //para aceitar opções da pessoa escrever em maiúscula e minúscula

switch (aux) { //escolha
    case "SÃO PAULO":
        document.write("Seja bem vindo a cidade que nunca para!");
    break; //n tem controle por {}
    case "NEW YORK":
        document.write("Seja bem vindo a Big Apple!");
    break;
    default:
        document.write("Não encontramos seu destino!");
}