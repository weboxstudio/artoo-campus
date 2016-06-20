class PostitAddCtrl {
  constructor($state, PostitsSrv) {
    this.$state = $state;
    this.postit = PostitsSrv.create();
  }
  
  add(postit) {
    this.loading = true;
    
    postit.$save()
      .then(data => this.$state.go('postits.list'))
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
} 

angular.module('spm').controller('PostitAddCtrl', PostitAddCtrl);