const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  datePublished: {
    type: String,
    required: true
  },
  url: {
    type: String,
    requied: true
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;