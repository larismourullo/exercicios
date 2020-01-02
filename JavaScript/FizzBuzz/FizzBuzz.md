# FizzBuzz

Escreva um programa que imprima usando `console.log()` todos os números de 1 a 100 com duas exceções. Para números divisíveis por 3, imprima `Fizz` ao invés do número, e para números divisíveis por 5 (e não 3), imprima `Buzz`.

Quando o programa estiver funcionando, modifique-o para imprimir `FizzBuzz` para números que são divisíveis ambos por 3 e 5 (e continue imprimindo `Fizz` e `Buzz` para números divisíveis por apenas um deles).

(Isto é na verdade uma pergunta de entrevista usada para eliminar uma porcentagem significativa de candidatos programadores. Então se você resolvê-la, você está autorizado de se sentir bem consigo mesmo).

**Dica:**

Interar sobre os números é trabalho claro de um loop, e selecionar o que imprimir é uma questão de execução condicional. Lembre-se do truque de usar o operador restante (`%`) para verificar se um número é divisível por outro número (terá zero de resto).

Na primeira versão, existem três resultados possíveis para cada número, então você irá criar uma cadeia de `if/else if/else`.

Na segunda versão o programa tem uma solução simples e uma inteligente. A maneira mais simples é adicionar um outro "ramo" para um teste preciso da condição dada. Para o método inteligente é construir uma sequência de caracteres contendo palavra ou palavras para a saída, que imprima a palavra ou o número, caso não haja palavra, fazendo o uso do operador elegante `||`.
