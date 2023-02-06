const mongoose = require('mongoose');


const connect = mongoose.connect('mongodb+srv://alphabas:alphabas1256@cluster0.q0gzq.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie... !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  module.exports = connect;
