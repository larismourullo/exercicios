# Recursão

Nós vimos que o `%` (operador resto) pode ser usado para testar se um número é par ou ímpar, usando `% 2` para verificar se ele é divisível por dois. Abaixo, está uma outra maneira de definir se um número inteiro positivo é par ou ímpar:

- Zero é par.
- Um é ímpar.
- Para todo outro número *N*, sua paridade é a mesma de *N - 2*.

Defina uma função recursiva `isEven` que satisfaça as condições descritas acima. A função deve aceitar um número como parâmetro e retornar um valor Booleano.

Teste-a com os valores 50 e 75. Observe como ela se comporta com o valor -1. Por quê? Você consegue pensar em uma maneira de arrumar isso?

```js
// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
```

**Dica**

Sua função será com uma cadeia de declarações `if`/`else if`/`else` que testam qual dos três casos se aplica. O `else` final, correspondente ao terceiro caso, é responsável por fazer a chamada recursiva. Cada uma das ramificações deverá conter uma declaração de retorno ou retornar um valor específico.

Quando o argumento recebido for um número negativo, a função será chamada recursivamente várias vezes, passando para si mesma um número cada vez mais negativo, afastando-se cada vez mais de retornar um resultado. Ela, eventualmente, consumirá todo o espaço em memória da pilha de chamadas e abortar.
