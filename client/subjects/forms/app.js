angular.module('artoo', [
    'appbar',
  ])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({
      name: 'Forms',
      url: 'subjects/forms'
    });
  });