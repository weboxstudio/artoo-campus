class Postit {
  constructor() {
    this.postits = [{
      id: '001',
      name: 'Buy concert tickets',
      body: 'Suspendisse potenti. Donec posuere vulputate arcu.',
      status: 'todo',
      dates: {
        createdAt: new Date(),
      },
    }, {
      id: '002',
      name: 'Call Marco',
      body: 'Suspendisse potenti. Donec posuere vulputate arcu.',
      status: 'done',
      dates: {
        createdAt: new Date(2016, 2, 17, 12, 23),
        doneAt: new Date(2016, 2, 17, 19, 23),
        inProgressAt: new Date(2016, 2, 17, 19, 23),
      },
    }, {
      id: '003',
      name: 'Renew my personal domain',
      body: 'Suspendisse potenti. Donec posuere vulputate arcu.',
      status: 'progress',
      dates: {
        createdAt: new Date(2016, 5, 16, 12, 23),
        inProgressAt: new Date(2016, 5, 18, 19, 22),
      },
    }];
  }
  
  /*+
   * add a post-it
   * 
   * @input {Object} postit
   */
  add(postit) {
    this.postits.push(postit);
  }
  
  /**
   * get post-its
   * 
   * @return {Array} postits
   */
  get() {
    return this.postits;
  }
  
  /**
   * is the post-it todo, in progress, or done?
   * 
   * @input {Object} postit
   * @input {String} status
   * @return {Boolean}
   */
  is(postit, status) {
    return postit.status === status;
  }
  
  /**
   * remove a post-it
   * 
   * @input {Object} postit
   */
  remove(postit) {
    this.postits.splice(this.postits.findIndex(p => p.id === postit.id), 1);
  }
  
  /**
   * set a post-it's status
   * 
   * @input {Object} postit
   * @input {String} status
   */
  setStatus(postit, status) {
    this.postits.forEach((singlePostit) => {
      if (singlePostit.id === postit.id) singlePostit.status = status;
    });
  }
}

angular.module('spm').service('PostitSrv', Postit);