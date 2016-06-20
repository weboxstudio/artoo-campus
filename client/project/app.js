angular.module('spm', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngMessages',
  'ngResource',
  'ui.router',
])

  // config angular material theme
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('blue')
      .warnPalette('red')
      .backgroundPalette('grey');
  })

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
      .state('postits', {
        abstract: true,
        template: '<ui-view/>',
        url: '',
      })
      .state('postits.list', {
        controller: 'PostitsListCtrl',
        controllerAs: 'PostitsListCtrl',
        templateUrl: 'project/postits/list/list.html',
        url: '/',
      })
      .state('postits.add', {
        controller: 'PostitAddCtrl',
        controllerAs: 'PostitAddCtrl',
        templateUrl: 'project/postits/add/add.html',
        url: '/add',
      });
  });