# Autocompletion

Estender um campo de texto para quando o usuário digitar uma lista de valores sugeridos é mostrado abaixo do campo. Você tem um conjunto de possíveis valores disponíveis e deve mostrar aqueles que começam com o texto que foi digitado. Quando uma sugestão é clicada, substitua o valor atual do campo de texto com ele.

```html
<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>
```

```js
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);

  // Your code here.
```

O melhor evento para a atualização da lista de sugestões é "`input`", uma vez que será acionado imediatamente quando o conteúdo do campo é alterado.

Em seguida, um loop por meio do array de termos e ver se eles começam com a string dada. Por exemplo, você poderia chamar `indexOf` e ver se o resultado é zero. Para cada sequência correspondente, adicionar um elemento para as sugestões `<div>`. Você deve, provavelmente,  cada vez que você inicia começar vazio e atualizar as sugestões, por exemplo, definindo sua textContent para a string vazia.

Você poderia adicionar um manipulador de evento "`click`" [para cada elemento  ou adicionar um único para fora `<div>` que prendê-los e olhar para a propriedade target do evento para descobrir qual sugestão foi clicada.]

Para obter o texto sugestão de um nó DOM, você pode olhar para a sua textContent ou definir um atributo para armazenar explicitamente o texto quando você cria o elemento.
