<h1 align="center">

  **Projeto Feito com [GraphQL-Yoga](https://github.com/prisma-labs/graphql-yoga)** 🧘

</h1>

### Tutorial

**Dentro da pasta do Projeto:**

- Executar `yarn` para fazer o download das dependências. [Yarn](https://yarnpkg.com/) 
- Executar a imagem `docker run --name mongographql -p 27017:27017 -d -t mongo`
- Executar a seed do mongodb (Na aplicação possui uma mutation para criar conta também, se necessário.) `yarn seeds`
- Executar o servidor `yarn start` onde é executado em *http://localhost:4000/*;

[![Query1](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img1.png "img1")](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img1.png "img1")

  1 - Query para verificar todas as contas: <br>
  `query {
  contas {
    conta
    saldo
  }
}`

[![Query2](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img2.png "img2")](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img2.png "img2")

  2 - Query para verificar uma conta: <br>
  `query {
  conta(conta:12345) {
    conta
    saldo
  }
}`

[![Query3](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img3.png "img3")](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img3.png "img3")

  3 - Mutation para sacar dinheiro: <br>
  `mutation {
  sacar(conta:12345, valor:100) {
    conta
    saldo
  }
}`

[![Query4](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img4.png "img4")](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img4.png "img4")

  4 - Mutation para depositar dinheiro: <br>
  `mutation {
  depositar(conta:12345, valor:100) {
    conta
    saldo
  }
}`

[![Query5](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img5.png "img5")](https://raw.githubusercontent.com/rickson-simoes/Graphql_FH_Challenge/master/imgs_exemplo/img5.png "img5")

  5 - Mutation para criar conta: <br>
  `mutation {
  criarConta(conta:1245, saldo:500) {
    conta
    saldo
  }
}`



**Obrigatoriedade mal sucedida*

- Executar os testes `yarn test`

*Os testes estão localizados em: `__tests__/resolver.test.js`*

*A configuração de testes está feita, porém não consegui realizar o procedimento de testes, infelizmente não obtive sucesso.*