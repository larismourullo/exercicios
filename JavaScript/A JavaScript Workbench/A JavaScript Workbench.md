# A JavaScript Workbench 

Construa uma interface que permite que as pessoas a digitem e executem partes do código JavaScript.

Coloque um botão ao lado de um campo `<textarea>` , ao ser  pressionado, usa o construtor `Function` para dividir o texto em uma função e chamá-lo. Converter o valor de retorno da função, ou qualquer erro que é elevado,em uma string e exibi-lo depois de o campo de texto.


```html
  <textarea id="code">return "hi";</textarea>
  <button id="button">Run</button>
  <pre id="output"></pre>
```  

```js  
  <script>
    // Your code here.
  </script>
```

Use `document.querySelector` ou `document.getElementById` para ter acesso aos elementos definidos em seu HTML. Um manipulador de eventos para o "`click`" ou eventos no botão "`mousedown`" pode ter a propriedade value do campo de texto e chamada `new Function` nele.

Certifique-se de envolver tanto a chamada para a `new function` e a chamada para o seu resultado em um bloco try para que você possa capturar exceções que ela produz. Neste caso, nós realmente não sabemos que tipo de exceção que estamos procurando, então pegar tudo.

A propriedade textContent do elemento de saída pode ser usada para preenchê-lo com uma mensagem de string. Ou, se você quiser manter o conteúdo antigo ao redor, criar um novo nó de texto usando document.createTextNode e anexá-lo ao elemento. Lembre-se de adicionar um caractere de nova linha até o fim, de modo que nem todas as  saídas apareçam em uma única linha.
