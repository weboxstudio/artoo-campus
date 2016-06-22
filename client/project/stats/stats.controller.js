class StatsCtrl {
  constructor(StatsSrv) {
    this.activityLoading = true;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    StatsSrv.activity()
      .then(activities => {
        this.activityData = [activities.map(activity => activity.count)];
        this.activityLabels = activities.map(activity => months[activity.month]);
      })
      .catch(err => console.error(err))
      .finally(() => this.activityLoading = false);
    
    this.statusLoading = true;
    StatsSrv.count()
      .then(counts => {
        this.statusLabels = counts.map(count => count.status[0].toUpperCase()+count.status.substr(1));
        this.statusCounts = counts.map(count => count.number);
      })
      .catch(err => console.error(err))
      .finally(() => this.statusLoading = false);
  }
}

angular.module('spm').controller('StatsCtrl', StatsCtrl);