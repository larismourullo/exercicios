# Shapes

Escreva um programa que tira as seguintes formas de uma tela:

- Um trapézio(um retângulo que é mais largo de um lado)
- Um diamante vermelho(um retângulo rotacionado em 45 graus ou ¼π radianos)
- A linha em ziguezague
- Uma espiral composta de 100 segmentos de linha reta
- Uma estrela amarela

![Exercise shapes](https://raw.githubusercontent.com/braziljs/eloquente-javascript/master/img/exercise_shapes.png)

Ao desenhar os dois últimos, você pode querer referir-se a explicação do `Math.cos` e `Math.sin` do capítulo 13 que descreve como obter coordenadas em um círculo usando essas funções.

Eu recomendo a criação de uma função para cada forma. Passar a posição e outras propriedades como algo opcional tais como o tamanho ou o número de pontos. A alternativa é para tirar o hard-code do seu código, tende tornar o código fácil de ler e modificar.

```js
<canvas width="600" height="200"></canvas>
<script>
	var cx = document.querySelector("canvas").getContext("2d");

	// Your code here.
</script>
```

**Dicas**

O trapézio(1) é fácil desenhar usando um `path`. Escolha as coordenadas do centro adequado e adicione cada um dos quatro cantos em torno dele. 

O diamante(2) pode ser desenhado de forma fácil com um `path`, uma maneira interessante pode ser feito com `transform` e `ratation`. Para usar `rotation` você terá que aplicar um truque semelhante ao que fizemos na função `flipHorizontally`. Você pode girar em torno do centro do seu retângulo e não em torno do ponto (0,0), primeiro você deve utilizar o `translate` em seguida `rotation` e então `translate` para voltar. 

Para o ziguezague(3) torna-se impraticável escrever uma novo `path` para cada `lineTo` do segmento de uma linha. Em vez disso você deve usar um loop. Você pode desenhar com dois segmentos de linha(à direita e depois à esquerda). Use a regularidade(2%) do índice de loop para decidir se vai para a esquerda ou direita. 

Você também vai precisar de um loop para a espiral(4). Se você desenhar uma série de pontos com cada ponto que se move mais ao longo de um círculo e ao redor do centro do espiral, você começara a fazer um círculo. Se durante o loop você variar o raio do círculo em que você está colocando o ponto atual o resultado sera um espiral. 

A estrela(5) representado é construída a partir de linhas `quadraticCurveTo`. Você também pode tirar uma com linhas retas. Divida um círculo em oito pedaços, ou um pedaço para cada ponto que você quer que sua estrela tenha. Desenhar linhas entre estes pontos, tornam as curvas na direção do centro da estrela. Com `quadraticCurveTo`, você pode usar o centro como o ponto de controle.
