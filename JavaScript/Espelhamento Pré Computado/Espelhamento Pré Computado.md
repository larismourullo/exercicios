# Espelhamento Pré Computado

Uma coisa ruim sobre `transformation` é que eles diminuem a qualidade do desenho de bitmaps. Para gráficos vectoriais o efeito é menos grave uma vez que apenas alguns pontos(por exemplo, o centro de um círculo) precisam de ser transformado, após ser desenhado normalmente. Para uma imagem de bitmap a posição de cada pixel tem que ser transformado, embora seja possível que os navegadores vão ficar mais inteligente sobre isso no futuro, atualmente este provoca um aumento considerável no tempo em que leva para desenhar um bitmap.

Em um jogo como o nosso, onde estamos desenhando apenas uma única entidade gráfica e transformando, isto não é um problema. Mas imagine que precisamos desenhar centenas de personagens ou milhares de partículas em rotação de uma explosão.

Pense em uma maneira que nos permite desenhar um personagem invertido sem carregar arquivos de imagem e sem ter que ficar transformando `drawImage` a cada frame que se chama.

**Dica**

A chave para a solução é o fato de que nós podemos usar um elemento de tela como uma imagem de origem ao usar `drawImage`. É possível criar um elemento extra de `<canvas>` sem adicioná-lo ao documento e colocar nossas sprites invertidas. Ao desenhar um quadro real, nós apenas copiamos as sprites já invertidos para a tela principal.

Alguns cuidados seria necessária porque as imagens não são carregadas instantaneamente. Fazemos o desenho invertido apenas uma vez e se fizermos isso antes do carregamento das imagens ele não vai chamar nada. Um manipulador `"load"` sobre a imagem pode ser usada para desenhar as imagens invertidas para o `canvas` extra. Esta área pode ser usado como uma fonte de desenho imediatamente(ele vai simplesmente ficar em branco até que desenhar o personagem apareça).
