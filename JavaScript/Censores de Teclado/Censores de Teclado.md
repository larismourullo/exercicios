# Censores de Teclado

Entre 1928 e 2013, uma lei Turca proibiu o uso das letras Q, W, X em documentos oficiais. Isso foi parte de uma iniciativa mais ampla para reprimir culturas Kurdish, essas casos ocorreram na língua utilizada por pessoas Kurdish mas não para os turcos de Istambul.

Neste exercício você esta fazendo uma coisas ridículas com a tecnologia, eu estou pedindo para você programar um campo de texto(uma tag `<input type="text">`) onde essas letras não pode ser digitada.

(Não se preocupe em copiar e colar algum exemplo.)

```html
<input type="text">
<script>
  var field = document.querySelector("input");
  // Your code here.
</script>
```

**Dica**

A solução para este exercício que envolve o impedindo do comportamento padrão dos eventos de teclas. Você pode lidar com qualquer evento `"keypress"` ou `"keydown"`. Se um dos dois tiver `preventDefault` chamado sobre ele, a tecla não aparece.

Identificar a letra digitada requer olhar o código de acesso ou propriedade `charCode` e comparar isso com os códigos para as letras que você deseja filtrar. Em `"keydown"` você não precisa se preocupar com letras maiúsculas e minúsculas, uma vez que precisa somente identificar somente a tecla pressionada. Se você decidir lidar com `"keypress"` que identifica o caráter real digitado você tem que ter certeza que você testou para ambos os casos. Uma maneira de fazer isso seria esta:

```
/[qwx]/i.test(String.fromCharCode(event.charCode))
```
