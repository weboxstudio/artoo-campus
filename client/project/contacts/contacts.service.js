angular.module('appenda').service('ContactsSrv', function () {
  
  // Define a maximum id highest id for the contacts objects
  var maxId = 2;
  
  // Initialize contacts list
  var contacts = [{
    id: 0,
    name: 'Silvia',
    surname: 'Peveri',
    phone: '3333333333',
    email: 'silvia.peveri@gmail.com',
    img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAh9AAAAJDQ2NWVkM2Y1LTYyMGUtNDhlZS04NmY2LTlkMWRmM2EwYjkzYQ.jpg',
  }, {
    id: 1,
    name: 'Alessandro',
    surname: 'Covre',
    phone: '3333333333',
    email: 'alessandro.boiascheo@gmail.com',
    img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAIrAAAAJDM3MTlhYjgwLWY0NWMtNDYwMS1iYzk5LWRiZGRhM2VhMWYyOA.jpg',
  }, {
    id: 1,
    name: 'Mattia',
    surname: 'De Luca',
    phone: '3333333333',
    email: 'io.sono.mattia.de.luca.e.anche.filippo@gmail.com',
    img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/03d/3b9/2843334.jpg',
  }, {
    id: 1,
    name: 'Leorenzo',
    surname: 'Cestaro',
    phone: '3333333333',
    email: 'leonardo.leo@gmail.com',
    img: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAW0AAAAJDNjNzgyOGVlLWZiOTEtNGU4OC04NTY5LTg3YmZlZDY3N2Y2MA.jpg',
  }];
  
  // create method to insert new contact in contacts list:
  // gets the compiled form fields converted in an object as input
  this.create = function (formInput) {
    formInput.id = maxId++;
    contacts.push(angular.copy(formInput));
  };
  
  // get method to access contacts list
  this.get = function () {
    return contacts;
  };
  
  // update method to edit a single contact
  // gets the compiled form fields converted in an object as input
  this.update = function (formInput) {
    contacts.forEach(function (singleContact) {
      if (singleContact.id === formInput.id) {
        singleContact = formInput;
      }
    });
  };
  
  // delete method to remove a contact from the list:
  // gets the id of the object to remove as input
  this.delete = function (id) {
    contacts.forEach(function (singleContact) {
      if (id === singleContact.id) {
        return contacts.splice(contacts.indexOf(singleContact), 1);
      }
    });
  };
  
});
