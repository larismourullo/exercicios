# Um Espaço Público na Rede

Uma vez que o servidor de arquivos serve qualquer tipo de arquivo e ainda inclui o cabeçalho `Content-Type`, você pode usá-lo para servir um website. Mas uma vez que seu servidor de arquivos permita que qualquer um delete e sobrescreva arquivos, seria um tipo interessante de website: que pode ser modificado, vandalizado e destruído por qualquer um que gaste um tempo para criar a requisição HTTP correta. Mas ainda assim, seria um website.

Escreva uma página HTML básica que inclui um simples arquivo JavaScript. Coloque os arquivos num diretório servido pelo servidor de arquivos e abra isso no seu navegador.

Em seguida, como um exercício avançado ou como um projeto de fim de semana, combine todo o conhecimento que você adquiriu desse livro para construir uma interface mais amigável pra modificar o website de dentro do website.

Use um formulário HTML (Capítulo 18) para editar os conteúdos dos arquivos que fazem parte do website, permitindo que o usuário atualize eles no servidor fazendo requisições HTTP como vimos no Capítulo 17.

Comece fazendo somente um único arquivo editável. Então faça de uma maneira que o usuário escolha o arquivo que quer editar. Use o fato de que nosso servidor de arquivos retorna uma lista de arquivos durante a leitura de um diretório.

Não trabalhe diretamente no código do servidor de arquivos, tendo em vista que se você cometer um engano você vai afetar diretamente os arquivos que estão lá. Ao invés disso, mantenha seu trabalho em um diretório sem acessibilidade pública e copie ele pra lá enquanto testa.

Se seu computador está diretamente ligado a internet, sem um _firewall_, roteador, ou outro dispositivo interferindo, você pode ser capaz de convidar um amigo para usar seu website. Para checar, vá até
[whatismyip.com](http://www.whatismyip.com/), copie e cole o endereço de IP que ele te deu na barra de endereço do seu navegador, e adicione `:8000` depois dele para selecionar a porta correta. Se isso te levar ao seu website, está online para qualquer um que quiser ver.

**Dicas**

Você pode criar um elemento `<textarea>` para conter o conteúdo do arquivo que está sendo editado. Uma requisição `GET`, usando `XMLHttpRequest`, pode ser usada para pegar o atual conteúdo do arquivo. Você pode usar URLs relativas como _index.html_, ao invés de _http://localhost:8000/index.html_, para referir-se aos arquivos do mesmo servidor que está rodando o script.

Então, quando o usuário clicar num botão (você pode usar um elemento `<form>` e um evento `"submit"` ou um simples manipulador `"click"`), faça uma requisição `PUT` para a mesma URL, com o conteúdo do `<textarea>` no corpo da requisição para salvar o arquivo.

Você pode então adicionar um elemento `<select>` que contenha todos os arquivos na raiz do servidor adicionando elementos `<option>` contendo as linhas retornadas pela requisição `GET` para a URL /. Quando um usuário seleciona outro arquivo (um evento `"change"` nesse campo), o script deve buscar e mostrar o arquivo. Também tenha certeza que quando salvar um arquivo, você esteja usando o nome do arquivo selecionado.

Infelizmente, o servidor é muito simplista para ser capaz de ler arquivos de subdiretórios de forma confiável, uma vez que ele não nos diz se a coisa que está sendo buscado com uma requisição `GET` é um arquivo ou um diretório. Você consegue pensar em uma maneira de extender o servidor para solucionar isso?
