const Contas = require('./Conta');

module.exports = {
  Query: {
    contas: () => Contas.find(),
    saldo: (_, { conta }) => Contas.findOne({conta})
  },

  Mutation: {
    criarConta: (_, {conta, saldo}) => Contas.create({conta, saldo}),
    depositar: (_, {conta, valor}) => Contas.findOneAndUpdate({conta}, { $inc: { saldo: valor }}).exec(),
    sacar: (_, {conta, valor}) => Contas.findOneAndUpdate({conta}, { $inc: { saldo: -valor }}).exec(),
  },
}