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
      name: 'Templates',
      url: '/subjects/templates',
    }, {
      name: 'Directives',
      url: '/subjects/directives',
    }, {
      name: 'Custom directives',
      url: '/subjects/custom-directives',
    }, {
      name: 'Components',
      url: '/subjects/components',
    }, {
      name: 'Services',
      url: '/subjects/services',
    }, {
      name: 'Forms',
      url: '/subjects/forms',
    }, {
      name: 'Angular Material',
      url: '/subjects/material',
    }, {
      name: 'Filters',
      url: '/subjects/filters',
    }, {
      name: 'Custom filters',
      url: '/subjects/custom-filters',
    }, {
      name: 'Promises',
      url: '/subjects/promises',
    }, {
      name: 'UI Router',
      url: '/subjects/ui-router',
    }, {
      name: 'NodeJS & ExpressJS',
      url: '/subjects/node-express',
    }, {
      name: 'MongoDB',
      url: '/subjects/mongodb',
    },];
  });

angular.element(document).ready(() => {
  angular.bootstrap(document, ['main'], {
    strictDi: false
  });
});

