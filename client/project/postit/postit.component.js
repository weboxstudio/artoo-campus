angular.module('spm').component('postit', {
  bindings: {
    postit: '<data',
    onDelete: '&',
  },
  controller: 'PostitCtrl',
  controllerAs: 'PostitCtrl',
  templateUrl: 'project/postit/postit.html',
});