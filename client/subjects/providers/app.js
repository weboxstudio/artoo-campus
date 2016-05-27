angular.module('artoo', [
  'appbar',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Providers', url: 'subjects/providers'});
  });