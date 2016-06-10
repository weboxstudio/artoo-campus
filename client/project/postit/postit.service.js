class Postit {
  constructor() {
    this.postits = [{
      id: '001',
    }];
  }
  
  /*+
   * add a post-it
   * 
   * @input {Object} postit
   */
  add(postit) {
    postits.push(postit);
  }
  
  /**
   * get post-its
   * 
   * @return {Array} postits
   */
  get() {
    return postits;
  }
  
  /**
   * remove a post-it
   * 
   * @input {Object} postit
   */
  remove(postit) {
    postits.splice(postits.findIndex(p => p.id === postit.id), 1);
  };
  
  /**
   * set a post-it's status
   */
  setStatus() {}
}

angular.module('spm').service('PostitSrv', Postit);