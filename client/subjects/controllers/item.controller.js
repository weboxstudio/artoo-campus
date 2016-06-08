// create a controller for the items
angular.module('artoo').controller('ItemsCrtl', ($scope) => {
    console.log('ItemsCrtl runs!');
   
    $scope.item = {
        name : 'Ascia bipenne',
        description: 'Lascia bipenne è una scure a due lame, simbolo del potere minoico.',
        slots: 6,
        image: 'http://khazalidgrungron.altervista.org/axes/05.png',
    };
    
    $scope.checkIfFits = (item, bagSize) => {
    return item.slots <= bagSize;    
    };
    
    $scope.dispose = () => {
        $scope.item = undefined;
    };
    
    $scope.toggleDescription = () => {
        $scope.visibleDescription = !$scope.visibleDescription;
    };
});
// attach the following data to it

/*
 * Ascia bipenne
 * L’ascia bipenne è una scure a due lame, simbolo del potere minoico.
 * Spazio occupato: 3 slots
 * http://khazalidgrungron.altervista.org/axes/05.png
 */

// attach some behaviours to the controller: read-description, check-if-fits, dispose
