# Tente Outra Vez...

Digamos que você tenha uma função `primitiveMultiply` que em 50 por cento dos casos multiplica dois números e em outros 50 por cento levanta uma exceção do tipo `MultiplicatorUnitFailure`. Escreva uma função que envolva esta função `MultiplicatorUnitFailure` e simplesmente tente até que uma chamada seja bem-sucedido retornando o resultado.

Certifique-se de lidar com apenas as exceções que você está tentando manipular.

```js
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  // Coloque seu código aqui.
}

console.log(reliableMultiply(8, 8));
// → 64
```

**Dica**

A chamada de `primitiveMultiply` obviamente deve acontecer em um bloco `try`. 
O bloco `catch` fica responsável para relançar a exceção quando não é uma instância de `MultiplicatorUnitFailure` e garantir que a chamada é repetida quando ele é uma instância de `MultiplicatorUnitFailure`.

Para refazer o processo, você pode usar um `loop` que quebra somente quando a chamada for bem sucedida; veja os exemplos de recursão nos capítulos anteriores e faça o uso; espero que você não tenha uma grande séries de erros na função `primitiveMultiply` pois isso pode extrapolar o `stack` e entrar em loop infinito.
