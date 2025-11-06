/**
 * Aqui iremos ver como trabalhar com conjuntos em JS
 */
/* não podemos usar dessa forma abaixo
let nome1 = "André";
let nome2 = "Amarildo";
...
let nome31 ="Zaqueu";
*/

//abaixo estou definindo um vetor com 4 nomes
// posições    0          1           2         3
let nomes = ["André", "Amarildo", "Joaquim", "Zaqueu"];
console.log (nomes[2]);
//listando os nomes usando laço for (1º opção)
//vetor. lenght devolve o tamanho do vetor
for (let i=0; i<nomes. length; i++)
    {
    console.log(nomes[i]);
}
console.log("Fim do For (1º opção)");
console.log("=i". repeat(20))
//listando os laços usando o laço for (2º opção)
for(const it of nomes){
    console.log(it);
}
console.log("fim do for (2º opção)");
//usando o while para listar os nomes
let i=0;
while(i<nomes.length){
    console.log(nomes[i++]);
}
console.log("fim do while")