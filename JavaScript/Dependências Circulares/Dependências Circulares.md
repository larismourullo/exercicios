# Dependências Circulares

Um assunto complicado na gestão de dependências é o de dependências circulares, onde módulo A depende do módulo B, e B também depende do módulo A. Muitos sistemas simplesmente proíbem isso. CommonJS permite uma forma limitada disso, onde isso funciona se os módulos não trocarem seus objetos exportados por padrão com outro valor, e somente começam a acessar a interface um do outro após terem finalizados seus carregamentos.

Você pode pensar em algo que dê suporte para essa funcionalidade ser implementada? Olhe anteriormente a definição de `require`, e considere o quê você deve fazer para permitir isso.

O segredo é adicionar o objeto `exports` criado por um módulo para requisitar o cache antes de rodar o módulo de fato. Isso significa que o módulo não teria tido ainda uma chance de sobrescrever `module.exports`, então não sabemos se ele deseja exportar outro valor. Depois de carregar, o objeto cache é sobrescrito com `module.exports`, que pode ser um valor diferente.

Mas se, no curso de carregar o módulo, um segundo módulo é carregado e solicita o primeiro módulo, seu objeto `exports` padrão, ainda vazio até este ponto, vai estar no cache, e o segundo módulo vai receber uma referência dele. Se ele não tentar fazer nada com o objeto até que o segundo módulo tenha terminado seu carregamento, as coisas vão funcionar.
