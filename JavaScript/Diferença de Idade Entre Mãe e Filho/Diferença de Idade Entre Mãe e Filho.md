# Diferença de Idade Entre Mãe e Filho

Calcule a diferença de idade média entre mães e filhos (a idade da mãe quando a criança nasce). Note que nem todas as mães mencionadas no conjunto de dados estão presentes no `array`. O objeto `byName` facilita a busca por um objeto pessoa através do nome. Esse método pode ser útil aqui.

```js
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

// → 31.2
```

**Dica**

Como nem todos os elementos do `array` de ascendência produz dados úteis (não podemos calcular a diferença de idade, a menos que saibamos a data de nascimento da mãe) teremos que aplicar de alguma maneira um filtro antes de chamarmos o `average`. Você pode fazer isso no primeiro passo, basta definir uma função `hasKnownMother` para a primeira filtragem. Alternativamente você pode começar a chamar o `map` e na função de mapeamento retornar a diferença de idade ou nulo se mãe for desconhecida. Em seguida você pode chamar o `filter` para remover os elementos nulos antes de passar o `array` para o método `average`.
