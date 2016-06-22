class ToastSrv {
  constructor($mdToast) {
    this.$mdToast = $mdToast;  
  }
  
  success(text) {
    this.$mdToast.show(
      this.$mdToast.simple()
        .textContent(text)
        .position('bottom left')
        .hideDelay(3000)
    );
  }
}

angular.module('spm').service('ToastSrv', ToastSrv);