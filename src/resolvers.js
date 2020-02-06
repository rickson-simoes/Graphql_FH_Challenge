const contas = [
  {id:1, conta:1234, saldo:4500}
]

module.exports = {
  Query: {
    contas: () => contas,
    saldo: () => contas[0]
  },

  Mutation: {
    criarConta: () => contas[0]
  },
}