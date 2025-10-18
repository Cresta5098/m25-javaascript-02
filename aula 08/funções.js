/**
 * criaçao e uso de funções
 */
//definido a função para usá-la
function fatorial(numero){
    let ret= 1;
    //aqui abaixo será um laço decrescente 5*4*3*2*1
    for(let i=numero; i>1; i--){
        ret*=i; //isso é o mesmo que ret = ret * 1
}
return ret; //retornando o valor
}
//usando a função 
console.log("O fatorial de 5 é " + fatorial(5));
