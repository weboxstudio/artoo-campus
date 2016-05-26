angular.module('artoo', [
  'appbar',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'NodeJS & ExpressJS', url: 'subjects/node-express'});
  });