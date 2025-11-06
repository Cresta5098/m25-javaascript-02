/**
 * exemplo de uso do laço while
 */
let i=0;
while(i<10){
    console.log("valor 2 de i " + i++);
    //lembrando que o pós incremento(variável++)
    //ocorre como ultima coisa antes de ir para a próxima linha
    //ou seja, imprime o valor de i e depois aumenta 1
}
console.log("Fim do while")
//usanod o while no final
do{
    console.log("valor de i= ", i++);

}while (i<10);
console.log ("fim do laço do... while")