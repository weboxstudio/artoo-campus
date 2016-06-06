module.exports = () => {
  // business logics
  const name = 'MyModule';
  const version = '1.0.0';
  
  function sayHello(name) {
    return 'Hello ' + name;
  };
  
  // public API
  return {
    name: name,
    sayHello: sayHello,
    version: version,
  };
};