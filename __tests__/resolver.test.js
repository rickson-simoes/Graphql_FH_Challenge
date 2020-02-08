const request = require('supertest');
const resolvers = require('../src/resolvers');

describe('Query', () => {
  it ('Deve exibir todas as contas', async () => {
    const response = await request(resolvers)
      .post('/tests')
      .send({
        query : {
          contas : {
            conta,
            saldo
          }
        }
      });

    expect(response).toBeTruthy();
  });

  it ('Deve exibir uma conta só', async () => {
    const response = await request(resolvers)
      .post('/tests')
      .send({
        query : {
          conta : 12345
        }
      });

    expect(response).toBeTruthy();
  });
});

describe('Mutations', () => {
  it ('Deve criar uma conta', async () => {
    const response = await request(resolvers)
      .post('/tests')
      .send({
        mutation : {
          criarContas : {
            conta:123,
            saldo:100
          }
        }
      });

    expect(response).toBeTruthy();
  });

  it ('Deve depositar dinheiro', async () => {
    const response = await request(resolvers)
      .post('/tests')
      .send({
        mutation : {
          depositar : {
            conta:12345,
            valor:100
          }
        }
      });

    expect(response).toBeTruthy();
  });

  it ('Deve sacar dinheiro', async () => {
    const response = await request(resolvers)
      .post('/tests')
      .send({
        mutation : {
          sacar : {
            conta:12345,
            valor:100
          }
        }
      });

    expect(response).toBeTruthy();
  });
});