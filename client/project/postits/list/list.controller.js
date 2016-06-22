class PostitsListCtrl {
  constructor(PostitsSrv, ToastSrv) {
    
    this.PostitsSrv = PostitsSrv;
    this.ToastSrv = ToastSrv;
    this.query(true);
    
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
      reverse: false,
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
  
  query(init) {
    this.loading = true;
    this.PostitsSrv.query()
      .then(data => {
        this.postits = data;
        if (!init) this.ToastSrv.success('Fresh post-its loaded');
      })
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
  
  remove(postit) {
    this.loading = true;
    
    postit.$remove()
      .then(data => this.PostitsSrv.query())
      .then(data => {
        this.postits = data;
        this.ToastSrv.success('Post-it successfully removed');
      })
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
  
  reset() {
    this.loading = true;
    this.PostitsSrv.reset()
      .then(data => {
        this.postits = data;
        this.ToastSrv.success('Post-its successfully reset');
      })
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
  
  setStatus(postit, status) {
    this.loading = true;
    
    postit.$setStatus({status: status})
      .then(data => this.PostitsSrv.query())
      .then(data => {
        this.postits = data;
        this.ToastSrv.success('Post-it status set to: ' + status);
      })
      .catch(err => console.error(err))
      .finally(() => this.loading = false);
  }
}

angular.module('spm').controller('PostitsListCtrl', PostitsListCtrl);