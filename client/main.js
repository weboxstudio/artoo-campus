const main = angular.module('main', [
  'appbar',
])
  .run(($rootScope) => {
    $rootScope.subjects = [{
      name: 'Init Angular',
      url: '/subjects/init',
    }, {
      name: 'Expressions',
      url: '/subjects/expressions',
    }, {
      name: 'Controllers',
      url: '/subjects/controllers',
    }, {
      name: 'Services',
      url: '/subjects/services',
    }, {
      name: 'Forms',
      url: '/subjects/forms',
    }, {
      name: 'Filters',
      url: '/subjects/filters',
    }, {
      name: 'Directives',
      url: '/subjects/directives',
    }, {
      name: 'Templates',
      url: '/subjects/templates',
    }, {
      name: 'Custom directives',
      url: '/subjects/custom-directives',
    }, {
      name: 'Components',
      url: '/subjects/components',
    }, {
      name: 'UI Router',
      url: '/subjects/ui-router',
    }, {
      name: 'Angular Material',
      url: '/subjects/material',
    }, {
      name: 'Promises',
      url: '/subjects/promises',
    }, {
      name: 'NodeJS & ExpressJS',
      url: '/subjects/node-express',
    }, {
      name: 'MongoDB',
      url: '/subjects/mongodb',
    }];
  });

angular.element(document).ready(() => {
  angular.bootstrap(document, ['main'], {
    strictDi: false,
  });
});
