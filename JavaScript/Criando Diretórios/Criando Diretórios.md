# Criando Diretórios

Embora o método `DELETE` esteja envolvido em apagar diretórios (usando `fs.rmdir`), o servidor de arquivos não disponibiliza atualmente nenhuma maneira de _criar_ diretórios.

Adicione suporte para o método `MKCOL`, que deve criar um diretório chamando `fs.mkdir`. `MKCOL` não é um método básico do HTTP, mas ele existe nas normas da _WebDAV_, que especifica um conjunto de extensões para o HTTP, tornando-o adequado para escrever recursos, além de os ler.

**Dicas**

Você pode usar a função que implementa o método `DELETE` como uma planta baixa para o método `MKCOL`. Quando nenhum arquivo é encontrado, tente criar um diretório com `fs.mkdir`. Quando um diretório existe naquele caminho, você pode retornar uma resposta 204, então as requisições de criação de diretório serão _idempotentes_. Se nenhum diretório de arquivo existe, retorne um código de erro. O código 400 ("_bad request_") seria o mais adequado nessa situação.
