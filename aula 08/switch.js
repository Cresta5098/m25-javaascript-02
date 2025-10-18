/**
 * exemplos de uso do SWITCH no JS
 */
console.log("menu de opções");
console.log("1 - cadastro");
console.log("2 - Consulta");
console.log("3 - Alteração");
console.log("4 - Exclusão");
let op = 2;
if (op==1){
    console.log("opção escolhida: Cadastro!!!");
}
else if (op == 2)
    {
    console.log ("opção escolhida: Consulta!!!")
    }
else if (op == 2){
    console.log ("opção escolhida: Alteração!!!")
}
else if (op == 2){
    console.log ("opção escolhida: Exclusão!!!")
}
else if (op == 2){
    console.log ("opção escolhida: Consulta!!!")
}
else {
    console.log("escolheu uma opção inválida");
}
/**
 * usando o switch para a mesma situação
 */
 switch(op){
    case 1: console.log ("escolheu Cadastro"); 
    break;
    case 2: console.log ("escolheu consulta");
    break;
    case 3: console.log ("escolheu Alteração");
    break;
    case 4: console.log ("exclusão Exclusão");
    break;
    default: console.log ("escolheu uma opção inválida");
 }
