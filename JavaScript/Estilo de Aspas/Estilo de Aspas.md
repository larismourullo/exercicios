# Estilo de Aspas

Imagine que você escreveu um texto e usou aspas simples por toda parte. Agora você deseja substituir todas que realmente possuem algum texto com aspas duplas, mas não as usadas em contrações de texto com _aren't).

Pense em um padrão que faça distinção entre esses dois usos de aspas e faça uma chamada que substitua apenas nos lugares apropriados.

```js
var text = "'I'm the cook,' he said, 'it's my job.'";
// Altere esta chamada
console.log(text.replace(/A/, "B"));
// → "I'm the cook," he said, "it's my job."
```

**Dicas**

A solução mais óbvia é substituir apenas as aspas que não estão cercadas de caracteres de palavra. A primeira expressão vem à mente é _/\W'\W/_, mas é preciso cuidado para lidar com o início da _string_ corretamente. Isso pode ser feito usando os marcadores "_ˆ_" e "_$_", como em _/(\W|^)'(\W|$)/_.
