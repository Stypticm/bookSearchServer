const mongoose = require("../../utils/mongo/mongoose"); // исправить
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  author: {
    type: String,
    required: true,
    validate: [validators.notEmpty, "title is empty"],
  },
  title: {
    type: String,
    required: true,
    validate: [validators.notEmpty, "title is empty"],
  },
  description: {
    type: String,
    required: true,
    validate: [validators.notEmpty, "title is empty"],
  },
  pages: {
    type: Number,
    min: 50,
    max: 500,
  },
  img: String,
});

// mongoose validation, max, min

module.exports = mongoose.model("book", BookSchema);
