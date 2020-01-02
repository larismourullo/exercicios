# Elementos por Nome de Tags

O método `getElementsByTagName` retorna todos os elementos filhos com um dado nome de `tag`. Implemente sua própria versão disso, como uma função normal, a qual recebe um nó e uma string (com o nome da tag) como argumentos e retorna um array contendo todos os nós de elementos descendentes com a dada tag.

Para encontrar o nome de tag de um elemento, use sua propriedade `tagName`. Mas note que isso irá retornar o mesmo nome de tag todo em caixa alta. Use os métodos `toLowerCase` ou `toUpperCase` para compensar isso.

```html
<h1>Cabeçalho com um elemento <span>span</span>.</h1>
<p>Um parágrafo com <span>um</span>, <span>dois</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    // Seu código aqui.
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
```

**Dica**

A solução é expressada mais facilmente com uma função recursiva, similar à função `talksAbout` definida anteriormente neste capítulo.

Você pode chamar `byTagname` usando ela mesma, ou seja, de maneira recursiva, concatenando os arrays resultantes para produzir uma saída. Uma aproximação mais eficiente à esse problema envolve definir uma função interior à qual chama a si mesma recursivamente, a qual tem acesso a qualquer posição do array definida na função exterior, nas quais ela pode adicionar os elementos que encontrar. Não esqueça de chamar a função interior através da função exterior uma vez.

A função recursiva deve checar o tipo de nó. Aqui nós estamos interessados apenas no nó tipo 1 (`document.ELEMENT_NODE`). Para tais nós, nós deveremos fazer um loop sobre seus filhos e, para cada filho, ver se ele cumpre nossos critérios de busca e também fazer uma chamada recursiva para inspecionar, por sua vez, seus próprios filhos.
