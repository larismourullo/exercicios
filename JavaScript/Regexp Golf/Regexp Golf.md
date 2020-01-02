# Regexp Golf

"Golf de Código" é um termo usado para o jogo de tentar escrever um programa com o menor número de caracteres possível. Parecido, o regexp golf é a prática de escrever pequenas expressões regulares para achar um determinado padrão (e apenas esse padrão).

Escreva uma expressão regular que testa quando qualquer das _sub-strings_ dadas ocorre em um texto. A expressão regular deverá achar apenas _strings_ contendo uma das _sub-strings_ dadas. Não se preocupe com limites de palavras a não ser que seja explicitamente pedido. Quando a sua expressão funcionar, veja se consegue fazê-la menor.

  "car" e "cat"
  "pop" e "prop"
  "ferret", "ferry", e "ferrari"
  Qualquer palavra terminando em "ious"
  Um espaço em branco seguido por um ponto, vírgula, dois-pontos, ou ponto-e-vírgula
  Uma palavra com mais de seis letras
  Uma palavra sem a letra "e"

Teste cada solução encontrada com alguns testes com _strings_.

```js
// Fill in the regular expressions

verify(/.../,
     ["my car", "bad cats"],
     ["camper", "high art"]);

verify(/.../,
     ["pop culture", "mad props"],
     ["plop"]);

verify(/.../,
     ["ferret", "ferry", "ferrari"],
     ["ferrum", "transfer A"]);

verify(/.../,
     ["how delicious", "spacious room"],
     ["ruinous", "consciousness"]);

verify(/.../,
     ["bad punctuation ."],
     ["escape the dot"]);

verify(/.../,
     ["hottentottententen"],
     ["no", "hotten totten tenten"]);

verify(/.../,
     ["red platypus", "wobbling nest"],
     ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished tests
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
  if (!regexp.test(s))
    console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
  if (regexp.test(s))
    console.log("Unexpected match for '" + s + "'");
  });
}
```
