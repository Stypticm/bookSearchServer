// инициализация mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/library-db", { useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;