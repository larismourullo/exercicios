# Gráfico de Pizza

Modifique este programa abaixo para que o nome de cada categoria seja mostrado e fique ao lado de cada fatia que representa. Tente encontrar uma maneira agradável de mostrar e posicionar automaticamente este texto. Você pode assumir que as categorias não são menores do que 5 por cento.

Você pode precisar do `Math.sin` e `Math.cos`.

```html
<canvas width="600" height="300"></canvas>
<script>
	var cx = document.querySelector("canvas").getContext("2d");
	var total = results.reduce(function(sum, choice) {
		return sum + choice.count;
	}, 0);

	var currentAngle = -0.5 * Math.PI;
	var centerX = 300, centerY = 150;
	// Add code to draw the slice labels in this loop.
	results.forEach(function(result) {
		var sliceAngle = (result.count / total) * 2 * Math.PI;
		cx.beginPath();
		cx.arc(centerX, centerY, 100,
					 currentAngle, currentAngle + sliceAngle);
		currentAngle += sliceAngle;
		cx.lineTo(centerX, centerY);
		cx.fillStyle = result.color;
		cx.fill();
	});
</script>
```

**Dicas**

Você vai precisar chamar `fillText`, definir `textAlign` e `textBaseline` para as propriedades do contexto de tal forma que o texto acabe onde quiser.

Uma forma sensata para posicionar os rótulos seria colocar o texto na linha que vai do centro de uma fatia ate o meio. Você não quer colocar o texto diretamente de encontro ao lado da fatia mas sim mover o texto para o lado da fatia por um determinado número de pixels.

O ângulo desta linha é `currentAngle + 0,5 * sliceAngle`. O código a seguir encontra-se em uma posição sobre esta linha de `120 pixels` para centro:

```js
var middleAngle = currentAngle + 0.5 * sliceAngle;
var textX = Math.cos(middleAngle) * 120 + centerX;
var textY = Math.sin(middleAngle) * 120 + centerY;
```

Para `textBaseline` o valor `"middle"` é provavelmente uma abordagem a ser utilizada. O que for usado para `textAlign` depende do lado do círculo em que estamos. À esquerda deve ser `"center"`, a direita deve usar `"rigth"`, e `left` para texto que estiver posicionado longe do pedaço.

Se você não tem certeza de como descobrir qual lado do círculo um determinado ângulo esta, olhe para a explicação de `Math.cos` no exercício anterior. O cosseno de um ângulo nos diz qual coordenada x corresponde, que por sua vez nos diz exatamente que lado do círculo em que estamos.
