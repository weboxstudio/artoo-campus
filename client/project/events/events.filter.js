angular.module('appenda')
  .filter('filterTitle',function () {
    return function (input, search){
      if(!search) return input;
      search = search.toLowerCase();
      return input.filter(event => event.title.toLowerCase().indexOf(search) > -1 || 
                          event.location.toLowerCase().indexOf(search) > -1);
    };
});