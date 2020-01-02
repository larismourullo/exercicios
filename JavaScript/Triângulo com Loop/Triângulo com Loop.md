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

```javascript
var abc = "abc";
console.log(abc.length);
// → 3
```

A maioria dos exercícios contém um pedaço de código que pode ser utilizada para alterar e resolver o exercício. Lembre-se que você pode clicar em um bloco de código para editá-lo.

```javascript
// Your code here.
```

**Dicas:**

Você pode começar com um programa que simplesmente imprime os números de 1 a 7, na qual você pode derivar algumas modificações no exemplo de impressão de números dado no início do capítulo aqui, onde o loop foi introduzido.

Agora, considere a equivalência entre números e cadeias em um `hash` de caracteres. Você pode ir de 1 para 2 adicionando 1 (`+ = 1`). Você pode ir de "#" para "##", adicionando um caractere (`+ = "#"`). Assim, a solução pode acompanhar de perto o número, de impressão do programa.
