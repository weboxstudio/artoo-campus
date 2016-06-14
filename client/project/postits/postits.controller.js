class PostitsCtrl {
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

    $scope.dueDateOptions = [{
      name: 'all',
      title: 'All',
    }, {
      name: 'expired',
      title: 'Expired',
    }, {
      name: 'not-expired',
      title: 'Not expired',
    },];
  }
}

angular.module('spm').controller('PostitsCtrl', PostitsCtrl);