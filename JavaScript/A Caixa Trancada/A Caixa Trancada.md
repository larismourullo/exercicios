# A Caixa Trancada

Considere o seguinte objeto:

```js
var box = {
  locked: true,
  unlock: function() { this.locked = false; },

  lock: function() { this.locked = true;  },

  _content: [],

  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};
```

Isto é uma caixa com um cadeado. Dentro dela tem um `array` mas você pode obtê-lo apenas quando a caixa for desbloqueada. Não é permitido acessar a propriedade `_content` diretamente.

Escreva uma função chamada `withBoxUnlocked` que assume o valor da função que é passada por argumento para abrir esta caixa. Execute a função e em seguida garanta que a caixa está bloqueada antes de voltar novamente; não importa se o argumento da função retornou normalmente ou emitiu uma exceção.

```js
function withBoxUnlocked(body) {
  // Your code here.
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked);
// → true
```

Para ganhar pontos extras, certifique-se de que chamou `withBoxUnlocked` quando a caixa já estava desbloqueada, pois a caixa deve sempre permanecer desbloqueada.

**Dica**

Você provavelmente deve ter adivinhado que este exercício solicita o uso do bloco `finally`. 
Sua função deve ser destravar a caixa e em seguida chamar a função que vem de argumento dentro da função `withBoxUnlocked`. 
E no `finally` ele deve travar a caixa novamente.

Para certificar-se de que nós não bloqueamos a caixa quando ela já estava bloqueada verifique no início da função se a mesma verificação é válida para quando a caixa esta desbloqueada e para quando quisermos bloquear ela novamente.
