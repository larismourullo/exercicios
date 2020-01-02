# Comentários

Seria bom se pudéssemos escrever comentários no **Egg**. Por exemplo, sempre que encontrar um cardinal `("#")`, poderíamos tratar o resto da linha como um comentário e ignorá-lo, semelhante que Javascript faz com o `"//"`.

Não temos de fazer quaisquer grandes mudanças para que o analisador suporte isto. Nós podemos simplesmente mudar o `skipSpace` para ignorar comentários assim como é feito com os espaços em branco; para que todos os pontos onde `skipSpace` é chamado agora também ira ignorar comentários. Vamos fazer essa alteração:

```js
// This is the old skipSpace. Modify it...
function skipSpace(string) {
  var first = string.search(/\S/);
  if (first == -1) return "";
  return string.slice(first);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}
```

**Dica**

Certifique-se de que sua solução é válida com vários comentários em uma linha e principalmente com espaço em branco entre ou depois deles.

Uma expressão regular é a maneira mais fácil de resolver isso. Faça algo que corresponda "espaços em branco ou um comentário, uma ou mais vezes". Use o método  `exec` ou `match` para olhar para o comprimento do primeiro elemento na matriz retornada(desde de o inicio) para saber quantos caracteres precisa para cortar.
