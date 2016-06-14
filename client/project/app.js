angular.module('spm', [
  'ngAnimate',
  'ngAria',
  'ngMaterial',
  'ngMessages',
])

  // config angular material theme
  .config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('light-blue')
      .warnPalette('orange')
      .backgroundPalette('grey');
  });