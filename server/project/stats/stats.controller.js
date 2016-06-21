module.exports = function () {
  var Postit = require('../postits/postits.model');
  
  function count(req, res) {
    var results = [];
    Postit.count({status: 'todo'}).exec()
      .then((number) => {
        results.push({
          status: 'todo',
          number: number,
        });
        return Postit.count({status: 'progress'}).exec();
      })
      .then((number) => {
        results.push({
          status: 'progress',
          number: number,
        });
        return Postit.count({status: 'done'}).exec();
      })
      .then((number) => {
        results.push({
          status: 'done',
          number: number,
        });
        res.status(200).json(results);
      })
      .catch(err => res.status(500).send(err));
  }
  
  function query(req, res) {
    res.status(200).send([]);
  }
  
  return {
    count: count,
    query: query,
  };
  
};