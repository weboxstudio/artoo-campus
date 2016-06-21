module.exports = function () {
  
  var Postit = require('./postits.model');
  
  function create(req, res) {
    req.checkBody('title').notEmpty();
    req.checkBody('dates.dueAt').notEmpty().isDate();
    const errors = req.validationErrors();
    if (errors) return res.status(400).send('Bad request');
    
    req.body.dates.createdAt = new Date();
    Postit.create(req.body)
      .then(data => res.status(201).json(data))
      .catch(err => res.status(500).json(err));
  }
  
  function query(req, res) {
    Postit.find().exec()
      .then(postits => res.status(200).json(postits))
      .catch(err => res.status(500).send());
  }
  
  function remove(req, res) {
    Postit.findByIdAndRemove(req.params.id).exec()
      .then(data => res.status(200).send())
      .catch(err => res.status(500).send(err));
  }
  
  function reset(req, res) {
    Postit.remove()
      .then(data => Postit.create(require('./postits')))
      .then(data => res.status(201).json(data))
      .catch(err => res.status(500).json(err));
  }
  
  function setStatus(req, res) {
    Postit.findByIdAndUpdate(req.params.id, {status: req.query.status}).exec()
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json(err));
  }
  
  // public API
  return {
    create: create,
    query: query,
    remove: remove,
    reset: reset,
    setStatus: setStatus,
  };
};