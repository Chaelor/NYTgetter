const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Notes
      .find({articleID: req.params.id})
      .then(dbNote => res.json(dbNote))
      .sort({date :  -1})
      .catch(err => res.status(422).json(err));
  }
};