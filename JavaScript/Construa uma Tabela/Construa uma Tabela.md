# Construa uma Tabela

O HTML faz com que mostrar tabelas seja um pouco mais fácil. Uma tabela em HTML é construída com a seguinte estrutura de tags:

```html
<table>
  <tr>
    <th>nome</th>
    <th>altura</th>
    <th>país</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>
```

Para cada *sequência* (linha), a tag `<table>` contém uma tag `<tr>`. Dentro dessa tag nós podemos colocar elementos célula: ou células de cabeçalho (`<th>`) ou células comuns (`<td>`).

Escreva uma função buildTable que, dado um array de objetos com um mesmo conjunto de propriedades, construa uma estrutura DOM representando uma tabela. A tabela deve ter uma sequência (linha) de cabeçalho com os nomes das propriedades dentro de elementos `<th>` e uma linha subsequente por objeto no array, com seus valores das propriedades em elementos `<td>`.

A função `Object.keys, a qual retorna um array contendo os nomes das propriedades que um objeto possui, provavelmente vai ser útil nesse caso.

Uma vez que você fez a parte básica funcionar, alinhe as células que contêm números à direita usando a propriedade `style.textAlign` com o valor "`right`".

```html
<style>
  /* Define uma visualização mais limpa para tabelas */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    // Seu código aqui.
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>
```

**Dicas**

Use `document.createElement` para criar novos nós de elementos, `document.createTextNode` para criar nós de texto e  o método `appendChild` para colocar nós dentro de outros nós.

Você deve fazer um loop através das palavras chaves uma vez para preencher a linha do topo e depois novamente para cada objeto no array para construir linhas com os dados.

Não esqueça de retornar o elemento `<table>` que engloba tudo isso no fim da função.
