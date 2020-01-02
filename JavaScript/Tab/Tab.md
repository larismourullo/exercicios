# Tab

A interface com abas é um padrão comum de design. Ele permite que você selecione um painel de interface escolhendo entre uma série de abas que se destaca acima de um outro elemento.

Neste exercício você vai implementar uma interface simples com abas. Escreva uma função `asTabs` que leva um nó do DOM e cria uma interface com abas mostrando os elementos filho desse nó. Você deverá inserir uma lista de elementos `<button>` na parte superior do nó e para cada elemento filho devera conter o texto recuperado do atributo `tabname` de cada botão. Todos exceto um dos filhos originais devem ser escondidos(dando um estilo de `display: none`) atualmente os nó disponíveis podem ser selecionados com um click nos botões.

Quando funcionar você devera mudar o estilo do botão ativo.

```html
<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  function asTabs(node) {
    // Your code here.
  }
  asTabs(document.querySelector("#wrapper"));
</script>
```

**Dica**

Uma armadilha que você provavelmente vai encontrar é que não podera usar diretamente propriedade `childNodes` do nó como uma coleção de nós na tabulação. Por um lado quando você adiciona os botões eles também se tornam nós filhos e acabam neste objeto porque é em tempo de execução. Por outro lado os nós de texto criados para o espaço em branco entre os nós também estão lá e não deve obter os seus próprios guias.

Para contornar isso vamos começar a construir uma matriz real de todos os filhos do `wrapper` que têm um `nodeType` igual a 1.

Ao registrar manipuladores de eventos sobre os botões as funções de manipulador vai precisar saber qual separador do elemento está associada ao botão. Se eles são criados em um circuito normal você pode acessar a variável de índice do ciclo de dentro da função mas não vai dar-lhe o número correto pois essa variável terá posteriormente sido alterada pelo loop.

Uma solução simples é usar o método `forEach` para criar as funções de manipulador de dentro da função passada. O índice de loop que é passado como um segundo argumento para essa função, será uma variável local normal e que não serão substituídos por novas iterações.
