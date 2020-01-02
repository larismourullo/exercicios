# Corrigindo o Escopo

Atualmente, a única maneira de atribuir uma variável um valor é utilizando o método `define`. Esta construção atua tanto como uma forma para definir novas variáveis e dar um novo valor para existentes.

Isto causa um problema de ambiguidade. Quando você tenta dar uma variável um novo valor que não esta local, você vai acabar definindo uma variável local com o mesmo nome em seu lugar(Algumas línguas funcionam assim por design, mas eu sempre achei uma maneira estranha de lidar com escopo).

Adicionar um `specialForm` similar ao `define` dara a variável um novo valor ou a atualização da variável em um escopo exterior se ele ainda não existir no âmbito interno. Se a variável não é definida em tudo lançar um `ReferenceError`(que é outro tipo de erro padrão).

A técnica de representar escopos como simples objetos tornou as coisas convenientes, até agora, e vai ficar um pouco no seu caminho neste momento. Você pode querer usar a função `Object.getPrototypeOf` que retorna os protótipos de um objeto. Lembre-se também que os escopos não derivam de `Object.prototype`, por isso, se você quiser chamar `hasOwnProperty` sobre eles,você tera que usar esta expressão não muito elegante:

```js
Object.prototype.hasOwnProperty.call(scope, name);
```

Este método(`hasOwnProperty`) busca o protótipo do objeto e depois chama-o em um objeto do escopo.

```js
specialForms["set"] = function(args, env) {
  // Your code here.
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError
```

**Dica**

Você vai ter que percorrer um escopo de cada vez usando `Object.getPrototypeOf` ate ir ao escopo externo. Para cada um dos escopos use `hasOwnProperty` para descobrir se a variável indicado pela propriedade `name` do primeiro argumento definida existe nesse escopo. Se isso acontecer defina-o como o resultado da avaliação do segundo argumento, e em seguida retorne esse valor.

Se o escopo mais externo é atingido(`Object.getPrototypeOf` retornando `null`) e não encontramos a variável, isto significa que não existe; então um erro deve ser acionado.
