angular.module('artoo', [
  'appbar',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Promises', url: 'subjects/promises'});
  });