# Boas-vindas ao projeto MongoDB Commerce

  Projeto feito durante o curso de desenvolvimento web na trybe.

  Nesse projeto, foi trabalhado o banco de dados `commerce`, que contém dados do cardápio do **McDonald's**, como ingredientes, valores nutricionais e dados fictícios de vendas.

<details>
  <summary>
    <h3>
      Antes de começar a desenvolver
    </h3>
    </summary>

  1. Clone o repositório

  - `git clone git@github.com:mabiiak/mongodb-commerce.git`.

  - Entre na pasta do repositório que você acabou de clonar:
    - `cd mongodb-commerce`

  2. Crie uma branch a partir da branch `master`

  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
    
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
    
  - Agora crie uma branch na qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b seunome-mongodb-commerce`

  3. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer o arquivo que você alterou como desafio1.js)
    
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando arquivo de solução _challenges/desafio1.js_ para desafio 1)
      - `git status` (deve aparecer listado o arquivo _challenges/desafio1.js_ em verde)
      
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto MongoDB Commerce'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  4. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin seunome-mongodb-commerce`

  5. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/mabiiak/mongodb-commerce/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/mabiiak/mongodb-commerce/pulls) e confira se o seu _Pull Request_ está criado

</details>

<details>
  <summary>
    <h3>
      Restaurando o banco de dados `commerce`
    </h3>
  </summary>

  1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro como **_Connection refused_**, tente reiniciar sua instância [seguindo as orientações desse link](https://app.betrybe.com/course/d396e5a2-d5c9-4f3a-b723-1a1d3ea06b3d).

  2. Quando sua instância estiver no ar e você estiver conectado a ela, digite `exit`. Com isso, você voltará ao terminal para iniciar a importação dos dados.

  3. Na raiz do diretório do projeto, execute o seguinte comando para restaurar a base de dados `commerce`:
    
  ```bash
    DBNAME=commerce ./scripts/resetdb.sh assets/produtos
  ```

  - A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

  ⚠️ **Importante**: tanto o script executado anteriormente quanto o script de execução local dos testes, restauram a base de dados `commerce`, portanto sempre salve seu progresso nos arquivos de desafio! Veja a orientação ➡️ 🛠 Testes ⚠️

</details>

## Requisitos

    ✅ 1 - Retorne a quantidade de documentos inseridos na coleção `produtos`

    ✅ 2 - Ordene a coleção `produtos` pela quantidade de lanches vendidos em ordem crescente, mostrando apenas o `nome` e a quantidade de lanches `vendidos`

    ✅ 3 - Retorne o lanche mais vendido, mostrando apenas o `nome` e a quantidade do lanche mais vendido

    ✅ 4 - Retorne os lanches que tiveram vendas maiores que `50` e menores que `100`, mostrando apenas o nome e a quantidade de lanches `vendidos` em ordem crescente

    ✅ 5 - Retorne o `nome`, as `curtidas` e `vendidos` dos lanches que tiveram quantidade de `curtidas` igual a `36` ou tenham a quantidade de vendas igual a `85`

    ✅ 6 - Retorne o `nome` e as `curtidas` dos lanches que tiveram curtidas maiores que `10` e menores que `100`

    ✅ 7 - Retorne o `nome` e `vendidos` dos lanches que tenham sido `vendidos` com uma quantidade diferente de `50` e em que o campo `tags` não exista

    ✅ 8 - Delete os lanches com menos de `50` `curtidas` e retorne o `nome` dos lanches que restaram no banco

    ✅ 9 - Retorne o `nome` de todos os lanches que possuam `calorias` abaixo de `500`

    ✅ 10 - Retorne o `nome` de todos os lanches que tenham o percentual de `proteínas` maior ou igual a `30` e menor ou igual a `40`

    ✅ 11 - Retorne o `nome` do produto, a quantidade de `curtidas` e quantos itens foram `vendidos` dos produtos que não sejam iguais a `Big Mac` e `McChicken`

    ✅ 12 - Adicione `ketchup` aos `ingredientes` para todos os sanduíches menos o `McChicken`, garantindo que não haja duplicidade nos `ingredientes`

    ✅ 13 - Inclua o campo `criadoPor` em todos os documentos, colocando `Ronald McDonald` no valor desse campo

    ❌ 14 - Crie uma query que retorne todos os lanches que possuem *picles* em seus ingredientes e mostre apenas os `3` primeiros itens contidos no array `valoresNutricionais`

    ✅ 15 - Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo

    ❌ 16 - Adicione o campo `ultimaModificacao` com a data corrente somente no sanduíche `Big Mac`

    ✅ 17 - Retorne a quantidade total de produtos em uma nova coleção chamada `resumoProdutos`

    ❌ 18 - Inclua `bacon` no final da lista de `ingredientes` dos sanduíches `Big Mac` e `Quarteirão com Queijo`

    ✅ 19 - Remova o item `cebola` de todos os sanduíches

    ✅ 20 - Remova o primeiro `ingrediente` do sanduíche `Quarteirão com Queijo`

    ✅ 21 - Remova o último `ingrediente` do sanduíche `Cheddar McMelt`

    ❌ 22 - Adicione a quantidade de vendas dos sanduíches por dia da semana

    ❌ 23 - Insira os valores `combo` e `tasty` no _array_ `tags` de todos os sanduíches e aproveite para deixar os valores em ordem alfabética ascendente (A a Z)

    ❌ 24 - Ordene em todos os documentos os valores do _array_ `valoresNutricionais` pelo campo `percentual` de forma decrescente

    ✅ 25 - Adicione o valor `muito sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior ou igual a `40`

    ✅ 26 - Adicione o valor `contém sódio` ao final do _array_ `tags` nos produtos em que o `percentual` de `sódio` seja maior do que `20` e menor do que `40`

    ✅ 27 - Conte quantos produtos contém `Mc` no nome, sem considerar letras maiúsculas ou minúsculas

    ✅ 28 - Conte quantos produtos têm `4` ingredientes

    ✅ 29 - Renomeie o campo `descricao` para `descricaoSite` em todos os documentos

    ✅ 30 - Remova o campo `curtidas` do item `Big Mac`

    ✅ 31 - Retorne o `nome` dos sanduíches em que o número de `curtidas` é maior que o número de sanduíches `vendidos`

    ✅ 32 - Retorne o `nome` e a quantidade de vendas (`vendidos`) dos sanduíches em que o número de vendas é múltiplo de `5`
