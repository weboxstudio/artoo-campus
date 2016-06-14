angular.module('appenda').service('EventsSrv', function () {
  
  // Define the highest id for the events object
  
  var maxId = 2;
  
  var events = [{
    id: 0,
    title: 'Dentist',
    date: new Date(), // temporary
    time: new Date(),
    location: 'via Napoli, 4 - Castel San Giovanni (PC)',
    bindedContacts: [],
    notes: 'pulizia dei denti',
  }, {
    id: 1,
    title: 'Dinner',
    date: new Date(1991, 00, 17), // temporary
    time: new Date(), // temporary
    location: 'via Colle Ameno, 161 - Torrette di Ancona (AN)',
    bindedContacts: [],
    notes: '',
  },];
  
  // Get method to access event list
  this.get =  function () {
    return events;
  };
  
  // Create a method to insert new events in event list
  this.create = function (newEvent) {
     newEvent.id = maxId++;
     events.push(angular.copy(newEvent));
     
  };
  
  // Delete method to remove an event from the list
  this.delete = function (id) {
    events.forEach(function (singleEvent) {
      if (singleEvent.id === id) {
        return events.splice(events.indexOf(singleEvent), 1); 
      };
    });
  };
  
  // this.update = function (newEvent) {
  //   events.forEach(function (singleEvent) {
  //     if (singleEvent.id === newEvent.id) {
  //       singleEvent = newEvent;
  //     }
  //   });
  // };
  
  
  
});
