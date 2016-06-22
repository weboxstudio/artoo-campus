class PostitAddCtrl {
  constructor($state, PostitsSrv, ToastSrv) {
    this.$state = $state;
    this.ToastSrv = ToastSrv;
    this.postit = PostitsSrv.create();
    this.minDueDate = new Date();
  }
  
  add(postit) {
    this.loading = true;
    
    postit.$save()
      .then(data => {
        this.ToastSrv.success('Post-it successfully created');
        this.$state.go('postits.list')
      })
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
}

angular.module('spm').controller('PostitAddCtrl', PostitAddCtrl);