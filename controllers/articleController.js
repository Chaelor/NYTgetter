const db = require("../models");

module.exports = {
  findSaved: (req, res) => {
    db.Articles
      .find("saved": true)
      .sort({date : -1})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Articles
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveArticle: (req, res) => {
    db.Articles
      .findOneAndUpdate({ _id: req.params.id}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deleteArticle: (req, res) => {
    db.Articles
      .findById(req.params.id)
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};