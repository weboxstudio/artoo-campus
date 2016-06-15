angular.module('spm', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngMessages',
  'ui.router',
])

  // config angular material theme
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('light-blue')
      .warnPalette('orange')
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