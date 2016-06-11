class PostitCtrl {
  constructor($scope, PostitSrv) {
    $scope.PostitSrv = PostitSrv;
    
    $scope.orderOptions = [{
      name: 'title',
      title: 'Title',
      reverse: false,
    }, {
      name: 'dates.createdAt',
      title: 'Creation date',
      reverse: true,
    }, {
      name: 'dates.doneAt',
      title: 'Completion date',
      reverse: true,
    }, {
      name: 'dates.progressAt',
      title: 'In progress date',
      reverse: true,
    }, {
      name: 'dates.dueAt',
      title: 'Due date',
      reverse: true,
    },];
    
    $scope.selectedOrder = $scope.orderOptions[1];
        
    $scope.filterOptions = [{},];
  }
}

angular.module('spm').controller('PostitCtrl', PostitCtrl);