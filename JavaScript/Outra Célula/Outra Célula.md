# Outra Célula

Implemente uma célula do tipo `StretchCell(inner, width, height)` que se adeque a [interface da célula da tabela](#definindo-uma-tabela). Ela deve envolver outra célula (como `UnderlinedCell` faz) e assegurar que a célula resultante tem pelo menos a largura (`width`) e altura (`height`) especificada, mesmo se a célula interior for naturalmente menor.

```js
// Your code here.

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]
```

**Dicas**

Você vai ter que armazenar os 3 argumentos construtores na instância do objeto. Os métodos `minWidth` e `minHeight` devem chamar através dos métodos correspondentes na célula interna (`inner`), mas assegure-se que nenhum número menor que o tamanho dado é retornado (possivelmente usando `Math.max`).

Não se esqueça de adicionar um método `draw` que simplesmente encaminha a chamada para a célula interior.
