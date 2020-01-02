# Nomes dos Meses

Escreva um simples módulo similar ao módulo `weekDay`, que pode converter os números dos meses (*zero-based*, assim como o tipo `Date`) para nomes, e nomes para números. Dê a este módulo seu próprio namespace, pois ele vai precisar de um array interno com o nome dos meses, mas use JavaScript puro, sem nenhum sistema de carregamento de módulos.

```js
// Your code here.

console.log(month.name(2));
// → March
console.log(month.number("November"));
// → 10
```

Ele vai seguir o módulo weekDay praticamente por inteiro. Uma função anônima, chamada imediatamente, encapsula a variável que contém o array de nomes, assim como as duas funções que precisam ser exportadas. As funções são colocadas em um objeto. A interface de objeto retornada é armazenada na variável `month`.
