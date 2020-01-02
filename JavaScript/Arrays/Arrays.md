# Arrays

Adicionar suporte para `array` em **Egg** construindo as três funções em `topEnv` do escopo: `array(...)` vai ser a construção de uma matriz contendo os argumentos como valores, `length(array)` para obter o comprimento de um `array` e `element(array, n)` buscar `n` elementos de uma matriz.

```js
// Modify these definitions...

topEnv["array"] = "...";

topEnv["length"] = "...";

topEnv["element"] = "...";

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
// → 6
```

**Dica**

A maneira mais fácil de fazer isso é representar as matrizes de **Egg** atravéz de matrizes do JavaScript.

Os valores adicionados ao `enviroment` no `topEnv` deve ser uma funções. `Array.prototype.slice`; pode ser utilizado para converter um `array` em um `object` de argumentos numa matriz regular.
