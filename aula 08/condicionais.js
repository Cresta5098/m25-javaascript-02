/**
 * Exemplos de uso de condicionais 
 */
let idade = 17;
//Usando IF(se)
if (idade>=18){
    console.log ("você pode dirigir!");
}
else if(idade>=16){
    console.log("Você está quase no ponto para dirigir, " + "aguente mais um pouco")
} 
else{
    console.log("você não pode dirigir!!!, você é menor de idade")
}
/**
 * > maior que =>            10 > 5 =>       verdadeiro
 * < menor que =>            5 < 2 =>        falso
 * == igual a =>             10 == 10 =>     verdadeiro
 * != diferente =>           10 != 5 =>      verdadeiro
 * >= maior ou igual a =>    10 >= 11 =>     falso
 * <= menor ou igual a =>    10 <= 11 =>     verdadeiro
 * 
 * Exemplos com texto:
 * 'Ana' > 'ana' => falso
 * 
 * Operadores lógicos:
 * && operador AND    => idade >= 18 && idade <= 60   
 *                    => verdadeiro para idades entre 18 e 60
 * 
 * || operador OR     => idade < 18 || idade > 60
 *                    => verdadeiro para idades menores de 18 ou idades maiores de 60
 * 
 * ! operador NOT     => !( idade >= 18 && idade <= 60)
 *                    => Nesse caso seria equivalente a verdadeiro para idades menores de 18 ou idades maiores de 60
 */