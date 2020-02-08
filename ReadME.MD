<h1 align="center">

  **Projeto Feito com [GraphQL-Yoga](https://github.com/prisma-labs/graphql-yoga)** 🧘

</h1>

### Tutorial

**Dentro da pasta do Projeto:**

- Executar `yarn` para fazer o download das dependências. [Yarn](https://yarnpkg.com/) 
- Executar a imagem `docker run --name mongographql -p 27017:27017 -d -t mongo`
- Executar a seed do mongodb (Na aplicação possui uma mutation para criar conta também, se necessário.) `yarn seeds`
- Executar o servidor `yarn start` onde é executado em *http://localhost:4000/*;




**Obrigatoriedade mal sucedidas**

- Executar os testes `yarn test`

*Os testes estão localizados em: `__tests__/resolver.test.js`*

A configuração de testes está feita, porém não consegui realizar o procedimento de testes, infelizmente não obtive sucesso