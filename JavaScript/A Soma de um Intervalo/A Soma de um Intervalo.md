# A Soma de um Intervalo

Uma boa alternativa para somar um intervalo de números:

```js
console.log(sum(range(1, 10)));
```

Escreva uma função chamada `range` que recebe dois argumentos, `start` (início) e `end` (fim), e retorna um _array_ contendo todos os números a partir do valor `start` até o valor `end` (incluindo-o).

Em seguida, escreva a função `sum` que recebe um _array_ de números como argumento e retorna a soma desses números. Execute o programa anterior e veja se o resultado retornado é de fato 55.

Como exercício bônus, modifique a sua função `range` para aceitar um terceiro argumento opcional que indica o tamanho do "incremento" usado para construir o _array_. Se nenhum valor for atribuído ao tamanho do incremento, o _array_ de elementos será percorrido em incrementos de um, correspondendo ao comportamento original. A chamada à função `range(1, 10, 2)` deve retornar `[1, 3, 5, 7, 9]`. Certifique-se de que funcione também com valores negativos, fazendo com que `range(5, 2, -1)` produza `[5, 4, 3, 2]`.

```js
// Your code here.

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
```

**Dicas**

A maneira mais fácil de construir um _array_ é primeiramente inicializar uma variável usando `[]` (um novo _array_ vazio) e, em seguida, chamar várias vezes o seu método `push` para adicionar os valores. Não se esqueça de retornar o _array_ no final da função.

Devido ao fato de que o limite final é inclusivo, ao invés de usar um simples operador `<`, você deverá usar o operador `<=` para checar o final do seu loop.

Para verificar se o argumento opcional de incremento foi fornecido, você pode verificar o `arguments.length` ou comparar o valor do argumento com `undefined`. Caso não tenha sido informado, apenas configure o seu valor padrão (1) no início da função.

Fazer com que `range` entenda incrementos negativos é provavelmente mais fácil de ser feito escrevendo dois loops distintos, um para contar valores crescentes e outro para valores decrescentes. Isso se dá pelo fato de que, quando estamos contando valores decrescentes, o operador que compara e verifica se o loop terminou precisa ser `>=` ao invés de `<=`.

Pode ser útil usar um valor de incremento diferente do valor padrão (por exemplo -1) quando o valor final do intervalo for menor do que o valor de início. Dessa forma, ao invés de ficar preso em um loop infinito, `range(5, 2)` retorna algo relevante.
