<h1 align="center">

  **Projeto Feito com [GraphQL-Yoga](https://github.com/prisma-labs/graphql-yoga)** 🧘

</h1>

### Tutorial

**Dentro da pasta do Projeto:**

- Executar `yarn` para fazer o download das dependências. [Yarn](https://yarnpkg.com/) 
- Executar a imagem `docker run --name mongographql -p 27017:27017 -d -t mongo`
- Executar a seed do mongodb (Na aplicação possui uma mutation para criar conta também, se necessário.) `node src/seed/seed`
- Executar o servidor `node src/server` onde é executado em *http://localhost:4000/*;