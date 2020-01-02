# Negociação de Conteúdo

Uma das coisas que o HTTP pode fazer, é chamada de _negociação de conteúdo_. O cabeçalho `Accept` de uma requisição pode ser usado para dizer ao servidor qual o tipo de documento que o cliente gostaria de receber. Muitos servidores ignoram esse cabeçalho, mas quando o servidor sabe como converter um recurso de várias formas, ele pode olhar esse cabeçalho e enviar a forma que o cliente prefere.

A URL [_eloquentjavascript.net/author_](eloquentjavascript.net/author) é configurada para responder tanto com formato simples de texto quanto com HTML ou JSON, dependendo de como o cliente solicita. Esses formatos são identificados pelos _tipos de mídia_ `text/plain`, `text/html` e `application/json`.

Envie requisições para recuperar todos os três formatos desse recurso. Use o método `setRequestHeader` do seu objeto `XMLHttpRequest` para definir o valor do cabeçalho chamado `Accept` para um dos tipos de mídia descritos acima. Certifique-se de configurar o cabeçalho _após_ chamar o método `open` e antes de chamar o método `send`.

Por fim, tente solicitar pelo tipo de mídia `application/rainbows+unicorns` e veja o que acontece.

```js
// Your code here.
```

**Dicas**

Veja os vários exemplos que usam `XMLHttpRequest` nesse capítulo, para ter uma ideia de como são as chamadas de métodos que envolvem fazer uma requisição. Você pode usar uma requisição síncrona (informando `false` como o terceiro parâmetro para `open`), se preferir.

Solicitar por um tipo de mídia inexistente, fará com que a resposta seja retornada com o código 406, _"Not acceptable"_ (Não aceitável), que é o código que o servidor deve retornar quando ele não pode satisfazer o cabeçalho `Accept`.
