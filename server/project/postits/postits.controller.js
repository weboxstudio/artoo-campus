module.exports = function () {
  
  var postits = require('./postits').slice();
  
  function create(req, res) {
    req.body.id = postits.length + 1;
    req.body.status = 'todo';
    req.body.dates = {createdAt: new Date()};
    postits.push(req.body);
    res.status(201).send();
  }
  
  function find(id) {
    return postits.findIndex(postit => postit.id === id);
  }
  
  function query(req, res) {
    res.status(200).json(postits);
  }
  
  function remove(req, res) {
    var index = find(parseInt(req.params.id));
    if (index < 0) return res.status(404).send('Postit not found');
    postits.splice(index, 1);
    res.status(200).send();
  }
  
  function reset(req, res) {
    postits = require('./postits').slice();
    console.log(postits);
    res.status(200).send();
  }
  
  function setStatus(req, res) {
    var index = find(parseInt(req.params.id));
    if (index < 0) return res.status(404).send('Postit not found');
    postits[index].status = req.body.status;
    res.status(200).send();
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