# Trilha do Mouse

Nos primeiros dias de JavaScript que era a hora de home pages berrantes com lotes de imagens animadas, as pessoas viram algumas maneiras verdadeiramente inspiradoras para usar a linguagem.

Uma delas foi a "trilha do mouse" a série de imagens que viriam a seguir o ponteiro do mouse quando você muda o cursor através da página.

Neste exercício, eu quero que você implemente um rastro de mouse. Use posicionadores absolutamente ao elemento `<div>` com um tamanho fixo e com uma cor de fundo(consulte o código na seção `"mouseclick"` para um exemplo). Crie um grupo de tais elementos e quando o mouse se mover exibir a esteira do ponteiro do mouse de alguma forma.

Existem várias abordagens possíveis aqui. Você pode fazer a sua solução simples ou complexa; como você quiser. Uma solução simples para começar é manter um número fixo de elementos da fuga e percorrê-las, movendo-se o próximo a posição atual do rato cada vez que um evento `"mousemove"` ocorrer.

```html
<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  // Your code here.
</script>
```

**Dica**

Para criar os elementos o melhor é fazer um loop e anexá-las ao documento para poder exibir. Para ser capaz de poder acessar mais tarde para alterar a sua posição e armazenar os elementos da fuga em uma matriz.

Ciclismo através deles pode ser feito mantendo uma variável de contador e adicionando 1 a ela toda vez que o evento de `"mousemove"` é disparado. O operador resto(% 10) pode então ser usado para obter um índice de matriz válida para escolher o elemento que você deseja posicionar durante um determinado evento.

Outro efeito interessante pode ser alcançado por um sistema de modelagem física simples. Use o evento `"mousemove"` apenas para atualizar um par de variáveis ​​que rastreiam a posição do mouse. Em seguida, use `requestAnimationFrame` para simular os elementos de rastros sendo atraídos para a posição do ponteiro do mouse. Em cada passo de animação atualizar a sua posição com base na sua posição relativa para o ponteiro do mouse(opcionalmente programe uma velocidade que é armazenado para cada elemento). Descobrir uma boa maneira de fazer isso é com você.
