# Novamente Números

Séries de dígitos podem ser usados pela agradável expressão regular _/\d+/_.

Escreva uma expressão que encontre (apenas) números no estilo JavaScript. Isso significa que precisa suportar um sinal de menor ou maior, opcional, na frente do número, um ponto decimal e a notação exponencial —5e-3 ou 1E10—, novamente com o sinal opcional na frente dele.

```js
// Preencha esta expressão regular
var number = /^...$/;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
	console.log("Falhou em achar '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
	console.log("Aceitou erroneamente '" + s + "'");
});
```

**Dicas**

Primeiro, não esqueça da barra invertida em frente ao ponto.

Achar o sinal opcional na frente do número, como na frente do exponencial, pode ser feito com _[+\-]?_ ou _(+|-|)_ (mais, menos ou nada).

A parte mais complicada deste exercício provavelmente é a dificuldade de achar "5." e ".5"  sem achar também o ".". Para isso, achamos que a melhor solução é usar o operador "|" para separar os dois casos, um ou mais dígitos opcionalmente seguidos por um ponto e zero ou mais dígitos, ou um ponto seguido por um ou mais dígitos.

Finalmente, fazer o "e" _case-insensitive_, ou adicional a opção "i" à expressão regular ou usar "_[eE]_ ".
