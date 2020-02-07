var seeder = require('mongoose-seed');
var path = require('path');

seeder.connect('mongodb://localhost:27017/graphqlnode', function() { 
  seeder.loadModels([
      path.resolve(__dirname, '..','Conta')
    ]);

  seeder.clearModels(['Conta'], function() {
  seeder.populateModels(data, function() {
      seeder.disconnect();
    }); 
  });
});
 
var data = [
  {
    'model': 'Conta',
    'documents': [
      {
          'conta': 12345,
          'saldo': 500
      },
      {
          'conta': 12346,
          'saldo': 1000
      }
    ]
  }
];