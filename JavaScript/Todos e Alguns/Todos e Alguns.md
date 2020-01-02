# Todos e Alguns

`Arrays` também vêm com os métodos padrões `every` (todos) e `some` (alguns). Ambos recebem uma função predicada que quando chamada com um `array` como argumento retorna `true` ou `false`. Assim como o operador `&&` retorna apenas `true` como valor quando as expressões de ambos os lados forem  `true`; `every` retorna `true` quando a função predicada retorna `true` para cada elemento do `array`. Sendo assim, a função predicada `some` retorna quando algum elemento do `array` tiver um valor como `true`. Ele não processa mais elementos do que o necessário - por exemplo, se o predicado `some` encontrar o que precisa no primeiro elemento do `array` ele não percorrerá os outros elementos.

Escreva duas funções, que se comporte como esses métodos, `every` e `some`, exceto se eles receberem um `array` como seu primeiro argumento ao invés de um método.

```js
// Your code here.

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
```

**Dica**

As funções podem seguir um padrão semelhante à definição de `forEach` que foi mostrado no início do capítulo, a única exceção é que eles devem retornar imediatamente (com o valor à direita) quando a função predicada retorna `true` ou `false`. Não se esqueça de colocar uma outra instrução de `return` após o `loop`; para que a função retorne um valor correto quando atingir o final do `array`.
