angular.module('artoo', [
  'appbar',  
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Expressions', url: 'subjects/expressions'});
  });