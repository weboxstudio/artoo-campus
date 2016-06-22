class StatsSrv {
  constructor ($resource) {
    
    this.Stats = $resource('/api/stats/:action', {}, {
      activity: {
        isArray: true,
        method: 'GET',
        params: {
          action: 'activity',
        },
      },
      count: {
        isArray: true,
        method: 'GET',
        params: {
          action: 'count',
        },
      }
    });
  }
  
  activity() {
    return this.Stats.activity().$promise;
  }
  
  count() {
    return this.Stats.count().$promise;
  }
  
  query() {
    return this.Stats.query().$promise;
  }
}

angular.module('spm').service('StatsSrv', StatsSrv);