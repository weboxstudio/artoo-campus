const name = 'appbar';

class AppbarProvider {
  setSubject(params) {
    this.subject = params;
  }

  $get() {
    const subject = this.subject;
    return {
      getSubject() {
        return subject;
      },
    };
  }
}

class Appbar {
  constructor(AppbarSrv) {
    this.subject = AppbarSrv.getSubject();
  }
}

angular.module(name, [])
  .provider('AppbarSrv', AppbarProvider)
  .component(name, {
    controller: Appbar,
    controllerAs: name,
    templateUrl: 'ui/appbar/appbar.html',
  });