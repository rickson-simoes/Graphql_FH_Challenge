const Contas = require('./Conta');

module.exports = {
  Query: {
    contas: () => Contas.find(),
    saldo: (_, { conta }) => Contas.findOne({conta})
  },

  Mutation: {
    criarConta: (_, {conta, saldo}) => Contas.create({conta, saldo}),
    depositar: (_, {conta, valor}) => Contas.findOneAndUpdate({conta}, { $inc: { saldo: valor }}).exec(),
    sacar: async (_, {conta, valor}) => {

      var MenorQue = await Contas.findOne({conta});      

      if ( (MenorQue.saldo-valor) < 0 ) {
        throw new Error(
          "Não pode sacar esta quantia"
        )
      }
      
     const insercaoValor = await Contas.findOneAndUpdate({conta}, { $inc: { saldo: - valor }}).exec();

     return insercaoValor;

    },
  },
}