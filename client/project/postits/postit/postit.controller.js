class PostitCtrl {
  constructor(PostitsSrv) {
    this.PostitsSrv = PostitsSrv;
  }
}

angular.module('spm').controller('PostitCtrl', PostitCtrl);