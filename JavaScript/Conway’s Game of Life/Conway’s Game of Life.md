# Conway’s Game of Life

Jogo da Vida de Conway é uma simulação simples que cria a "vida" artificial em uma grade, cada célula, que é ao vivo ou não. Cada geração (virar), as seguintes regras são aplicadas:

Qualquer célula viva com menos de dois ou mais de três vizinhos vivos morre.

Qualquer célula viva com dois ou três vizinhos vivos vive para a próxima geração.

Qualquer célula morta com exatamente três vizinhos vivos se torna um ce ao vivo

Um vizinho é definido como qualquer célula adjacente, inclusive na diagonal adjacentes.

Nota-se que estas regras são aplicadas a toda a rede de uma só vez, e não um quadrado de cada vez. Isso significa que a contagem de vizinhos baseia-se na situação no início da produção, e mudanças acontecendo com as células vizinhas durante esta geração não deve influenciar o novo estado de uma dada célula.

Implementar este jogo usando qualquer estrutura de dados que você ache mais apropriado. Use Math.random para  preencher a grade com um padrão aleatório inicialmente. Exibi-lo como uma grade de campos de checkboxes, com um botão ao lado dele para avançar para a próxima geração. Quando os controlos de utilizador ou desmarca as checkboxes , as alterações devem ser incluídos no cálculo a próxima geração.

```html
<div id="grid"></div>
<button id="next">Next generation</button>
```

```js
<script>
  // Your code here.
</script>
```

Para resolver o problema de ter conceitualmente as alterações ocorram ao mesmo tempo, tente ver o cálculo de uma geração como uma função pura, que tem uma grelha e produz uma nova grade que representa a curva seguinte.

Representando a grade pode ser feito em qualquer das formas mostradas nos capítulos 7 e 15. Contando vizinhos vivos podem ser feitas com dois loops aninhados, percorrer coordenadas adjacentes. Tome cuidado para não contar as células fora do campo e ignorar o celular no centro, cujos vizinhos estamos contando.

Fazer alterações em check-boxes em vigor na próxima geração pode ser feito de duas maneiras. Um manipulador de eventos pode perceber essas alterações e atualizar a grade atual para refleti-los, ou você poderia gerar  uma nova grade a partir dos valores nas caixas de seleção antes de calcular o próximo turno.

Se você optar utilizar  manipuladores de eventos, você pode querer anexar atributos que identificam a posição que cada caixa corresponde ao modo que é fácil descobrir qual célula de mudar.

Para desenhar a rede de caixas de seleção, você ou pode usar um elemento `<table>` ou simplesmente colocá-los todos no mesmo elemento e colocar `<br>` (quebra de linha) elementos entre as linhas.
