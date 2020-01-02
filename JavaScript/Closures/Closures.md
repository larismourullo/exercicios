# Closures

A maneira que definimos o `fun` é permitido que as funções em **Egg** se chamem em ambiente circundante, permitindo o corpo da função utilizar valores locais que eram visíveis no momento que a função foi definida, assim como as funções em JavaScript fazem.

O programa a seguir ilustra isso: função `f` retorna uma função que adiciona o seu argumento ao argumento de f, o que significa que ele precisa de acesso ao escopo local dentro de `f` para ser capaz de utilizar a variável.

```js
run("do(define(f, fun(a, fun(b, +(a, b)))),",
    "print(f(4)(5)))");
// → 9
```

Volte para a definição da forma `fun` e explique qual o mecanismo feito para que isso funcione.

**Dica**

Mais uma vez, estamos cavalgando sobre um mecanismo de JavaScript para obter a função equivalente em **Egg**. Formas especiais são passados para o `enviroment` local de modo que eles possam ser avaliados pelas suas sub-formas do `enviroment`. A função retornada por `fun` se fecha sobre o argumento `env` dada a sua função de inclusão e usa isso para criar `enviroment` local da função quando é chamado.

Isto significa que o `prototype` do `enviroment` local será o `enviroment` em que a função foi criado, o que faz com que seja possível ter acesso as variáveis de `enviroment` da função. Isso é tudo o que há para implementar e finalizar(embora para compilá-lo de uma forma que é realmente eficiente, você precisa de um pouco mais de trabalho).
