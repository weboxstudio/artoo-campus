class StatsCtrl {
  constructor(StatsSrv) {
    StatsSrv.count()
      .then(counts => {
        this.labels = counts.map(count => count.status[0].toUpperCase()+count.status.substr(1));
        this.pCounts = counts.map(count => count.number+Math.floor(Math.random()*100));
        this.rCounts = [this.pCounts];
      })
      .catch(err => console.error(err));
  }
}

angular.module('spm').controller('StatsCtrl', StatsCtrl);