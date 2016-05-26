angular.module('artoo', [
  'appbar',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'MongoDB', url: 'subjects/mongodb'});
  });