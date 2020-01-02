# Negociação de Conteúdo, Novamente

O exercício anterior era preciso fazer várias requisições para [eloquentjavascript.net/author](http://eloquentjavascript.net/author), pedindo por tipos diferentes de conteúdo passando cabeçalhos `Accept` diferentes.

Faça isso novamente usando a função `http.request` do Node. Solicite pelo menos os tipos de mídia `text/plain`, `text/html` e `application/json`. Lembre-se que os cabeçalhos para uma requisição podem ser passados como objetos, na propriedade `headers` do primeiro argumento da `http.request`.

Escreva o conteúdo das respostas para cada requisição.

**Dica**

Não se esqueça de chamar o método `end` no objeto retornado pela `http.request` para de fato disparar a requisição.

O objeto de resposta passado ao _callback_ da `http.request` é um _stream_ de leitura. Isso significa que ele não é muito trivial pegar todo o corpo da resposta dele. A função a seguir lê todo o _stream_ e chama uma função de _callback_ com o resultado, usando o padrão comum de passar qualquer erro encontrado como o primeiro argumento do _callback_:

```js
function readStreamAsString(stream, callback) {
  var data = "";
  stream.on("data", function(chunk) {
    data += chunk.toString();
  });
  stream.on("end", function() {
    callback(null, data);
  });
  stream.on("error", function(error) {
    callback(error);
  });
}
```
