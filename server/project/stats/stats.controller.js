module.exports = function () {
  const async = require('async');
  const Postit = require('../postits/postits.model');
  
  function activity(req, res) {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const months = [];
    for (var i = currentMonth + 1; i < currentMonth + 13; i++) months.push(i % 12);
    
    async.mapSeries(months, (month, done) => {
      const start = new Date(currentYear, month, 1);
      const end = new Date(currentYear, month + 1, 1);
      
      Postit.count({'dates.doneAt': {$gte: start, $lt: end}}, (err, count) => done(err, {month: month, count: count}));
    }, (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(200).send(results);
    });
  }
  
  function count(req, res) {
    const results = [];
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
    activity: activity,
    count: count,
    query: query,
  };
  
};