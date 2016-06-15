angular.module('page-loader', [])
  .controller('PageLoaderCtrl', function ($scope) {
    $scope.$on('$stateChangeStart', function () {
      $scope.loading = true;
    });

    $scope.$on('$stateChangeSuccess', function () {
      $scope.loading = false;
    });
  })

  .component('pageLoader', {
    controller: 'PageLoaderCtrl',
    controllerAs: 'PageLoaderCtrl',
    templateUrl: 'ui/page-loader/page-loader.html',
  });