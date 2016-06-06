module.exports = () => {
  function get(req, res) {
    res.status(200).send([]);
  }
  
  return {
    get: get,
  };
}