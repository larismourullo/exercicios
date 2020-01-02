# Um Tipo de Vetor

Escreva um construtor `Vector` que represente um vetor em duas dimensões do espaço. Ele recebe os parâmetros `x` e `y` (números), que deve salvar em propriedades de mesmo nome.

Dê ao protótipo de `Vector` dois métodos, `plus` e `minus`, que pegam outro vetor como parâmetro e retornam um novo vetor que tem a soma ou diferença dos valores `x` e `y` dos dois vetores (o vetor que está em `this` e o passado no parâmetro).

Adicione uma propriedade getter `length` ao protótipo que calcula o tamanho do vetor - isto é, a distância do ponto (`x, y`) até a origem (0,0).

```js
// Your code here.

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
```

**Dicas**

Adicionar uma propriedade getter ao construtor pode ser feita com a função `Object.defineProperty`. Para calcular a distância do ponto `(0, 0)` até `(x, y)` você pode usar o teorema de Pitágoras, que diz que o quadrado da distância que estamos procurando é igual ao quadrado da coordenada x mais o quadrado da coordenada y. Assim, `√(x2 + y2)` é o número que você quer, e `Math.sqrt` é o caminho para você calcular a raiz quadrada no JavaScript.
