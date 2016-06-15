class PostitAddCtrl {
  constructor($state, PostitsSrv) {
    this.PostitsSrv = PostitsSrv;
    this.$state = $state;
  }
  
  add(postit) {
    this.PostitsSrv.add(postit);
    this.$state.go('postits.list');
  }
} 

angular.module('spm').controller('PostitAddCtrl', PostitAddCtrl);