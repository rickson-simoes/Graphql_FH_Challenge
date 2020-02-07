const Contas = require('./Conta');

module.exports = {
  Query: {
    contas: () => Contas.find(),
    saldo: (_, { conta }) => Contas.findOne({ conta })
  },

  Mutation: {
    criarConta: (_, {conta, saldo}) => Contas.create({ conta, saldo }),

    depositar: async (_, {conta, valor}) => {      
      var { conta } = await Contas.findOne({ conta });      

      const insercaoValor = await Contas.findOneAndUpdate({ conta }, { 
        $inc: { saldo: valor }
      });
      
      return insercaoValor;
    },

    sacar: async (_, {conta, valor}) => {
      var { conta, saldo } = await Contas.findOne({ conta });        

      if ((saldo-valor) < 0 ) {
        throw new Error(
          "Não pode sacar esta quantia"
        )};

      const insercaoValor = await Contas.findOneAndUpdate({ conta }, { 
       $inc: { saldo: - valor }
      });

      return insercaoValor;
    },
  },
}