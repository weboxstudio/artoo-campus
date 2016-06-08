angular.module('artoo', [
    'appbar',
  ])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({
      name: 'Controllers',
      url: 'subjects/controllers'
    });
  });