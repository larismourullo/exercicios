# A Lista

Objetos tratados como agrupamentos genéricos de valores, podem ser usados para construir diversos tipos de estrutura de dados. Uma estrutura de dados comum é a _lista_ (não se confunda com o _array_). A lista é um conjunto de objetos, sendo que o primeiro objeto contém uma referência para o segundo, o segundo para o terceiro, e assim por diante.

```js
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```

O resultado é uma cadeia de objetos conectados, como mostrado abaixo:

![Linked List](http://eloquentjavascript.net/img/linked-list.svg)

Uma das vantagens das listas é que elas podem compartilhar partes de sua estrutura. Por exemplo, se eu criasse dois novos valores `{value: 0, rest: list}` e `{value: -1, rest: list}` (sendo que `list` é uma referência à variável definida anteriormente), ambas serão listas independentes que compartilham a mesma estrutura que foi usada para criar os três últimos elementos. Além disso, a lista original ainda é uma lista válida com três elementos.

Escreva a função `arrayToList` que constrói uma estrutura de dados similar à estrutura anterior quando fornecido `[1, 2, 3]` como argumento e, escreva também, a função `listToArray` que produz um _array_ a partir de uma lista. Além disso, implemente uma função auxiliar `prepend` que receberá um elemento e uma lista e será responsável por criar uma nova lista com esse novo elemento adicionado ao início da lista original e, por fim, crie a função `nth` que recebe uma lista e um número como argumentos e retorna o elemento que está na posição informada pelo número ou `undefined` caso não exista elemento em tal posição.

Caso não tenha feito ainda, implemente a versão recursiva da função `nth`.

```js
// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
```

**Dicas**

Construir uma lista é mais fácil de ser feito de trás para frente. Portanto, `arrayToList` poderia percorrer o _array_ de trás para frente (veja o exercício anterior) e, para cada elemento, adicionar um objeto à lista. Você pode usar uma variável local para armazenar a parte da lista que foi criada e usar um padrão parecido com `list = {value: X, rest: list}` para adicionar um elemento.

Para percorrer uma lista (no caso de `listToArray` e `nth`), o seguinte loop `for` pode ser usado:

```js
for (var node = list; node; node = node.rest) {}
```

Você consegue ver como isso funcionaria? A cada iteração do loop, `node` aponta para a próxima sublista e, por isso, o corpo da função pode acessar a propriedade `value` para pegar o elemento atual. Ao final de cada iteração, `node` é atualizado apontando para a próxima sublista. Quando seu valor é `null`, nós chegamos ao final da lista e o loop é finalizado.

A versão recursiva de `nth` irá, similarmente, olhar para uma parte ainda menor do _tail_ (final) da lista e, ao mesmo tempo, fazer a contagem regressiva do índice até que chegue ao zero, significando que é o ponto no qual ela pode retornar a propriedade `value` do nó que está sendo verificado. Para acessar o elemento na posição zero de uma lista, você pode simplesmente acessar a propriedade `value` do seu nó _head_ (inicial). Para acessar o elemento `N + 1`, você pega o n-ésimo elemento da lista que está contido na propriedade `rest` da lista em questão.
