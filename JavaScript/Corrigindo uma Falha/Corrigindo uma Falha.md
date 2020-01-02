# Corrigindo uma Falha

Para um fácil acesso remoto aos arquivos, eu poderia adquirir o hábito de ter o servidor de arquivos definido nesse capítulo na minha máquina, no diretório `/home/braziljs/public/`. E então, um dia, eu encontro alguém que tenha conseguido acesso a todos as senhas que eu gravei no navegador.

O que aconteceu?

Se ainda não está claro para você, pense novamente na função `urlToPath`
definida dessa forma:

```js
function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  return "." + decodeURIComponent(path);
}
```

Agora considere o fato de que os caminhos para as funções `"fs"` podem ser relativos-eles podem conter "../" para voltar a um diretório acima. O que acontece quando um cliente envia uma requisição para uma dessas URLs abaixo?

```
http://myhostname:8000/../.config/config/google-chrome/Default/Web%20Data
http://myhostname:8000/../.ssh/id_dsa
http://myhostname:8000/../../../etc/passwd
```

Mudar o `urlToPath` corrige esse problema. Levando em conta o fato de que o Node no Windows permite tanto barras quanto contrabarras para separar diretórios.

Além disso, pense no fato de que assim que você expor algum sistema _meia boca_ na internet, os _bugs_ nesse sistema podem ser usado para fazer coisas ruins para sua máquina.

**Dicas**
Basta remover todas as recorrências de dois pontos que tenham uma barra, uma contrabarra ou as extremidades da _string_. Usando o método `replace` com uma expressão regular é a maneira mais fácil de fazer isso. Não se esqueça da _flag_ `g` na expressão, ou o `replace` vai substituir somente uma única instância e as pessoas ainda poderiam incluir pontos duplos no caminho da URL a partir dessa medida de segurança! Também tenha certeza de substituir _depois_ de decodificar a _string_, ou seria possível despistar o seu controle que codifica pontos e barras.

Outro caso de preocupação potencial é quando os caminhos começam com barra, que são interpretados como caminhos absolutos. Mas por conta do `urlToPath` colocar um ponto na frente do caminho, é impossível criar requisições que resultam em tal caminho. Múltiplas barras numa linha, dentro do caminho, são estranhas mas serão tratadas como uma única barra pelo sistema de arquivos.
