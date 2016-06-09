angular.module('artoo').controller('ItemsCtrl', function($scope, ItemsSrv) {
    $scope.ItemsSrv = ItemsSrv;

    $scope.selectItem = (code) => {
        $scope.item = ItemsSrv.find(code);
    };

    // $scope.selectedItem = ItemsSrv.get()[0].code;
    //$scope.selectedItem($scope.selectedItem);

    $scope.item = {
        code: 'it01',
        name: 'Ascia bipenne',
        description: 'L\'ascia bipenne è una scure a due lame, simbolo del potere minoico.',
        image: 'http://khazalidgrungron.altervista.org/axes/05.png',
    }


    $scope.insert = function(item, form) {
        //call service
        ItemsSrv.add(item);
        $scope.resetForm(form);


    };

    $scope.update = (item, form) => {
        ItemsSrv.update(item);
    }

    $scope.resetForm = (form) => {
        $scope.item = {};
        form.$setPristine();
    };

    this.update = (item) => {
        items.forEach((singleItem) => {
            if (singleItem.code === item.code) {
                singleItem.name = item.name;
                singleItem.description = item.description;
                singleItem.image = item.image;
            }
        });
    };
});