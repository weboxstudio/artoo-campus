angular.module('spm', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngMessages',
])
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('light-blue')
      .warnPalette('orange')
      .backgroundPalette('grey');
  });