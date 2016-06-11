class PostitCtrl {
  constructor($scope, PostitSrv) {
    $scope.PostitSrv = PostitSrv;
  }
}

angular.module('spm').controller('PostitCtrl', PostitCtrl);