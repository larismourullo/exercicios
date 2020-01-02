# Comparação "Profunda"

O operador `==` compara objetos pelas suas identidades. Entretanto, algumas vezes, você pode preferir comparar os valores das suas propriedades de fato.

Escreva a função `deepEqual` que recebe dois valores e retorna `true` apenas se os valores forem iguais ou se forem objetos que possuem propriedades e valores iguais quando comparados usando uma chamada recursiva de `deepEqual`.

Para saber se a comparação entre duas coisas deve ser feita pela identidade (use o operador `===` para isso) ou pela verificação de suas propriedades, você pode usar o operador `typeof`. Se ele produzir `"object"` para ambos os valores, você deverá fazer uma comparação "profunda". Entretanto, você deve levar em consideração uma exceção: devido a um acidente histórico, `typeof null` também produz `"object"`.

```js
// Your code here.

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
```

**Dicas**

O teste para saber se está lidando com um objeto real deverá ser parecido com `typeof x == "object" && x != null`. Tome cuidado para comparar as propriedades apenas quando ambos argumentos forem objetos. Em todos os outros casos, você pode simplesmente retornar imediatamente o resultado da aplicação do operador `===`.

Use um loop `for/in` para percorrer todas as propriedades. Você precisa verificar se ambos os objetos possuem o mesmo conjunto de propriedades e se essas propriedades têm valores idênticos. O primeiro teste pode ser feito contando a quantidade de propriedades em cada objeto e retornar `false` se forem diferentes. Caso seja o mesmo, então, percorra todas as propriedades de um objeto e, para cada uma delas, verifique se o outro objeto também a possui. Os valores das propriedades são comparados usando uma chamada recursiva para `deepEqual`.

Para retornar o valor correto da função, é mais fácil retornar imediatamente `false` quando qualquer diferença for encontrada e retornar `true` apenas ao final da função.
