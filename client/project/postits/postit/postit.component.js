angular.module('spm').component('postit', {
  bindings: {
    postit: '<data',
    onDelete: '&',
    onSetStatus: '&',
  },
  controller: 'PostitCtrl',
  controllerAs: 'PostitCtrl',
  templateUrl: 'project/postits/postit/postit.html',
});