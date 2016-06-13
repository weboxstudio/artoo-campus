class PostitCtrl {
  constructor(PostitSrv) {
    this.PostitSrv = PostitSrv;
  }
}

angular.module('spm').controller('PostitCtrl', PostitCtrl);