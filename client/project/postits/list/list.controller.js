class PostitsListCtrl {
  constructor(PostitsSrv) {
    
    this.PostitsSrv = PostitsSrv;
    this.query();
    
    // order options
    this.orderOptions = [{
      name: 'title',
      title: 'Title',
      reverse: false,
    }, {
      name: 'dates.createdAt',
      title: 'Creation date',
      reverse: true,
    }, {
      name: 'dates.doneAt',
      title: 'Completion date',
      reverse: true,
    }, {
      name: 'dates.progressAt',
      title: 'In progress date',
      reverse: true,
    }, {
      name: 'dates.dueAt',
      title: 'Due date',
      reverse: true,
    },];
    
    // filter by status options
    this.statusOptions = [{
      name: '!all',
      title: 'All',
    }, {
      name: '!done',
      title: 'Not done',
    }, {
      name: 'todo',
      title: 'To do',
    }, {
      name: 'progress',
      title: 'In progress',
    }, {
      name: 'done',
      title: 'Done',
    },];

    this.dueDateOptions = [{
      name: 'all',
      title: 'All',
    }, {
      name: 'expired',
      title: 'Expired',
    }, {
      name: 'not-expired',
      title: 'Not expired',
    },];
  }
  
  query() {
    this.loading = true;
    this.PostitsSrv.query()
      .then(data => this.postits = data)
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
  
  remove(postit) {
    this.loading = true;
    
    postit.$remove()
      .then(data => this.PostitsSrv.query())
      .then(data => this.postits = data)
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
  
  setStatus(postit, status) {
    this.loading = true;
    
    postit.status = status;
    postit.$setStatus()
      .then((data) => this.PostitsSrv.query())
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
}

angular.module('spm').controller('PostitsListCtrl', PostitsListCtrl);