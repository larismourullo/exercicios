# Triângulo com Loop

Escreva um programa que faça sete chamadas a `console.log()` para retornar o seguinte triângulo:

	#
	##
	###
	####
	#####
	######
	#######

Uma maneira interessante para saber o comprimento de uma `string` é escrevendo `.length` após ela.

```js
var abc = "abc";
console.log(abc.length);
// → 3
```

**Dicas**

Você pode começar com um programa que simplesmente imprime os números de 1 a 7, na qual você pode derivar algumas modificações.

Agora, considere a equivalência entre números e cadeias em um `hash` de caracteres. Você pode ir de 1 para 2 adicionando 1 (`+= 1`). Você pode ir de "#" para "##", adicionando um caractere (`+= "#"`). Assim, a solução pode acompanhar de perto o número, de impressão do programa.
