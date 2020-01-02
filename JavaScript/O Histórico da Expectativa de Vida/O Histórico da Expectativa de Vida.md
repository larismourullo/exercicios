# O Histórico da Expectativa de Vida

Quando olhamos para todas as pessoas no nosso conjunto de dados que viveram mais de 90 anos, só a última geração dos dados que retornou. Vamos observar mais de perto esse fenômeno.

Calcule o resultado da idade média das pessoas no conjunto de dados definidos por século. Uma pessoa é atribuída a um século pegando o ano da sua morte, dividindo por 100 e arredondando para cima com `Math.ceil(person.died / 100)`.

```js
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
```

Para ganhar um ponto extra escreva uma função `groupBy` que abstrai a operação de agrupamento. Ele deve aceitar um `array` como argumento e uma função que calcula cada elemento do grupo de `array` e retorna um objeto que mapeia os nomes dos grupos de `arrays` e os membros do grupo.

**Dica**

A essência desse exemplo encontra-se no agrupamento dos elementos em um conjunto por alguns aspectos - a divisões do `array` de ancestrais em pequenos `arrays` com os ancestrais de cada século.

Durante o processo de agrupamento, mantenha um objeto que associa os nomes dos séculos (números) com os `arrays` de objetos de pessoas ou idades. Já que não sabemos quais agrupamentos iremos encontrar, teremos que criá-los em tempo real. Depois de calcular o século para cada pessoa, vamos testar para saber se o século já existe. Se não existir adicione um `array` para ele. Em seguida adicione a pessoa (ou idade) no `array` de acordo com o século apropriado.

Finalmente um `loop` `for/in` pode ser usado para escrever a média de idades para cada século individualmente.
