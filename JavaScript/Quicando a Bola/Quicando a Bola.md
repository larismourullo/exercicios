# Quicando a Bola

Use a técnica `requestAnimationFrame` que vimos no Capítulo 13 e no Capítulo 15 para desenhar uma caixa com uma bola quicando dentro. A bola se move a uma velocidade constante e rebate nos lados da caixa quando é tocada.

```js
<canvas width="400" height="400"></canvas>
<script>
	var cx = document.querySelector("canvas").getContext("2d");

	var lastTime = null;
	function frame(time) {
		if (lastTime != null)
			updateAnimation(Math.min(100, time - lastTime) / 1000);
		lastTime = time;
		requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);

	function updateAnimation(step) {
		// Your code here.
	}
</script>
```

**Dicas**

A caixa é fácil de desenhar com `strokeRect`. Definir uma variável que contém o seu tamanho e definir duas variáveis da largura e altura da sua caixa. Para criar uma bola redonda, inicie um `path` chamando `arc(x, y, raio, 0, 7)` que cria um arco que vai de zero pra cima para um círculo completo, e depois preencha.

Para modelar a posição da bola e velocidade, você pode usar o tipo vetor a partir do capítulo 15. Dê uma velocidade de partida de preferência um que não é puramente vertical ou horizontal, e a cada quadro multiplique a velocidade com a quantidade de tempo que decorreu. Quando a bola fica muito perto de uma parede vertical inverta o componente x em sua velocidade. Da mesma forma inverta o componente y quando ela atinge uma parede na horizontal.

Depois de encontrar a nova posição e velocidade da bola, use `clearRect` para excluir a cena e redesenhá-lo usando a nova posição.
