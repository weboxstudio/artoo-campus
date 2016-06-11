class PostitCtrl {
  constructor($scope, PostitSrv) {
    $scope.PostitSrv = PostitSrv;
    
    // order options
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
    
    // init order options to creation date
    $scope.selectedOrder = $scope.orderOptions[1];

    // filter by status options
    $scope.statusOptions = [{
      name: '',
      title: 'All',
    }, {
      name: '!done',
      title: 'Not done',
    }, {
      name: 'todo',
      title: 'To do',
    }, {
      name: 'progress',
      title: 'In progress',
    }, {
      name: 'done',
      title: 'Done',
    },];
    
    // init filter options
    $scope.search = {
      status: $scope.statusOptions[0].name,
    };
  }
}

angular.module('spm').controller('PostitCtrl', PostitCtrl);