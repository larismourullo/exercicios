# Invertendo um _Array_

Os _arrays_ possuem o método `reverse`, que modifica o _array_ invertendo a ordem em que os elementos aparecem. Para esse exercício, escreva duas funções: `reverseArray` e `reverseArrayInPlace`. A primeira (`reverseArray`) recebe um _array_ como argumento e produz um _novo array_ que tem os mesmos elementos com ordem inversa. A segunda (`reverseArrayInPlace`) funciona da mesma forma que o método `reverse`, só que nesse caso, invertendo os elementos do próprio _array_ que foi fornecido como argumento. Ambas as funções não devem usar o método padrão `reverse`.

Levando em consideração as notas sobre efeitos colaterais e funções puras do [capítulo anterior](./03-funcoes.md), qual versão você espera que seja útil em mais situações? Qual delas é mais eficiente?

```js
// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```

**Dicas**

Existem duas maneiras óbvias de implementar `reverseArray`. A primeira é simplesmente iterar o _array_ fornecido do início ao fim e usar o método `unshift` para inserir cada elemento no início do novo _array_. A segunda é iterar o _array_ fornecido começando pelo fim e terminando no início, usando o método `push`. Iterar um _array_ de trás para frente faz com que seja necessário usar uma notação `for` um pouco estranha (`var i = array.length - 1; i >= 0; i--`).

Inverter o _array_ em questão (`reverseArrayInPlace`) é mais difícil. Você deve ter cuidado para não sobrescrever elementos que você precisará posteriormente. Usar `reverseArray` ou até mesmo copiar o _array_ inteiro (`array.slice(0)` é uma boa forma de se copiar um _array_) funciona, mas é considerado trapaça.

O truque é _inverter_ o primeiro e o último elemento, depois o segundo e o penúltimo e assim por diante. Você pode fazer isso percorrendo até a metade do valor de `length` do _array_ (use `Math.floor` para arredondar o valor para baixo, pois você não precisa lidar com o elemento do meio de um _array_ com tamanho ímpar) e substituir o elemento na posição `i` com o elemento na posição `array.length - 1 - i`. Você pode usar uma variável local para armazenar temporariamente um dos elementos, sobrescrever o seu valor com o valor do elemento espelhado (elemento que deseja substituir) e, por fim, colocar o valor da variável local no lugar onde o elemento espelhado estava originalmente.
