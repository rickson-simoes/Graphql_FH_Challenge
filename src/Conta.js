const mongoose = require('mongoose');

const ContaSchema = new mongoose.Schema({
  conta: Number,
  saldo: Number
})

module.exports = mongoose.model('Conta', ContaSchema);