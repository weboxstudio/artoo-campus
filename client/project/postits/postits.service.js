class PostitsSrv {
  constructor($resource) {
    this.Postits = $resource('/api/postits/:action/:id', {
      id: '@_id',
    }, {
      reset: {
        isArray: true,
        method: 'GET',
        params: {
          action: 'reset',
        },
      },
      setStatus: {
        method: 'PUT',
      }
    });
  }
  
  /*+
   * creates a post-it
   */
  create() {
    return new this.Postits();
  }
  
  /**
   * query post-its
   * 
   * @return {Array} postits
   */
  query() {
    return this.Postits.query().$promise;
  }
  
  reset() {
    return this.Postits.reset().$promise;
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
}

angular.module('spm').service('PostitsSrv', PostitsSrv);