# Interface Sequencial

Projete uma *interface* que abstraia interações sobre uma coleção de valores. Um objeto que fornece esta interface representa uma sequência, e a interface deve de alguma forma tornar possível para o código que usa este objeto iterar sobre uma sequência, olhando para o valor dos elementos de que ela é composta e tendo alguma forma de saber quando o fim da sequência foi atingido.

Quando você tiver especificado sua interface, tente escrever uma função `logFive` que pega um objeto sequencial e chama `console.log` para seus primeiros 5 elementos - ou menos, se a sequência tiver menos do que cinco elementos.

Então implemente um tipo de objeto `ArraySeq` que envolve um array e permite interação sobre o array usando a interface que você desenvolveu. Implemente outro tipo de objeto `RangeSeq` que itera sobre um intervalo de inteiros (recebendo os argumentos `from` e `to` em seu construtor).

```js
// Your code here.

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
```

**Dicas**

Uma forma de resolver isso é fornecendo objetos sequenciais *state*, que significa que suas propriedades são alteradas no seu processo de uso. Você pode armazenar um contador que indica quão longe o objeto sequenciais avançaram.

Sua interface vai precisar expor ao menos uma forma de pegar o próximo elemento e encontrar se a iteração já chegou no fim da sequencia. É tentador fazer isso em um método, `next`, que retorna `null` ou `undefined` quando a sequência chegar ao fim. Mas agora você tem um problema quando a sequência realmente tiver `null`. Então um método separado (ou uma propriedade getter) para descobrir se o fim foi alcançado é provavelmente preferível.

Outra solução é evitar mudar o estado do objeto. Você pode expor um método para pegar o elemento atual (sem o auxílio de nenhum contador) e outro para pegar uma nova sequência que representa os elementos restantes depois do atual (ou um valor especial se o fim da sequência tiver sido atingido). Isso é bem elegante - um valor sequencial vai "permanecer ele mesmo" mesmo depois de ter sido usado e pode ser compartilhado com outro código sem a preocupação sobre o que pode acontecer com ele. Isso é, infelizmente, algo um pouco ineficiente numa linguagem como JavaScript porque envolve criar vários objetos durante a iteração.
