# Esperando por Múltiplas _promises_

O construtor _Promise_, possui um método chamado `all` que, quando fornecido um _array_ de _promises_, retorna uma _promise_ que aguarda a finalização de todas as _promises_ do array. O método `all`, então, finaliza com sucesso, gerando um _array_ com os valores dos resultados. Se qualquer uma das _promises_ do _array_ falhar, a _promise_ retornada pelo `all` também falha, recebendo o valor de falha da _promise_ que falhou inicialmente.

Tente implementar algo parecido com isso usando uma função normal chamada `all`.

Observe que depois que a _promise_ é resolvida (obtendo sucesso ou falhado), ela não pode ter sucesso ou falhar novamente, ignorando as chamadas às funções posteriores que tentam resolvê-la. Isso pode facilitar a maneira que você manipula as falhas em sua _promise_.

```js
function all(promises) {
  return new Promise(function(success, fail) {
    // Your code here.
  });
}

// Test code.
all([]).then(function(array) {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("This should be [1, 2, 3]:", array);
});
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("boom"));
  });
}
all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("We should not get here");
}, function(error) {
  if (error.message != "boom")
    console.log("Unexpected failure:", error);
});
```

**Dicas**

A função passada ao construtor `Promise` terá que chamar o método `then` para cada uma das _promises_ do _array_ fornecido. Quando uma delas obtiver sucesso, duas coisas precisam acontecer. O valor resultante precisa ser armazenado na posição correta em um _array_ de resultados e devemos, também, verificar se essa foi a última _promise_ pendente, finalizando nossa própria _promise_ caso tenha sido.

O último pode ser feito usando um contador, que é inicializado com o valor do tamanho do _array_ fornecido e do qual subtraímos uma unidade cada vez que uma _promise_ for bem-sucedida. No momento em que o contador chega ao valor zero, terminamos. Certifique-se de lidar com a situação em que o _array_ fornecido é vazio e, consequentemente, nenhuma _promise_ será resolvida.

Tratar falhas requer um pouco mais de esforço, mas acaba sendo extremamente simples. Basta passar, para cada _promise_ do _array_, a função que lida com a falha da _promise_ responsável por encapsular as _promises_ do array, de forma que uma falha em qualquer uma delas, irá disparar a falha para a _promise_ encapsuladora.
