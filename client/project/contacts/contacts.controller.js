angular.module('appenda').controller('ContactsCtrl', function (ContactsSrv) {
  this.ContactsSrv = ContactsSrv;
  
  this.add = function (newContact) {
    ContactsSrv.create(newContact);
    this.newContact = {};
  };
});