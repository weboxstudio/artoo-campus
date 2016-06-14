angular.module('appenda').filter('filterByNameSurname', function () {
  return function (input, search) {
    if (!search) return input;
    search = search.toLowerCase();
    return input.filter(contact => contact.name.toLowerCase().indexOf(search) > -1 || contact.surname.toLowerCase().indexOf(search) > -1);
  };
});