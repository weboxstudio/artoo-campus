class StatsSrv {
  constructor ($resource) {
    this.Stats = $resource('/api/stats/:action', {}, {
      count: {
        isArray: true,
        method: 'GET',
        params: {
          action: 'count',
        },
      }
    });
  }
  
  count() {
    return this.Stats.count().$promise;
  }
  
  query() {
    return this.Stats.query().$promise;
  }
}

angular.module('spm').service('StatsSrv', StatsSrv);