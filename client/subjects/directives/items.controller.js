angular.module('artoo').controller('ItemsCtrl', function($scope) {
    $scope.items = [{
        name: 'Ascia bipenne',
        code: 'it01',
        description: 'L\'ascia bipenne è una scure a due lame, simbolo del potere minoico.',
        image: 'http://khazalidgrungron.altervista.org/axes/05.png',
        price: 3.5,
        availability: 3,
        createdAt: new Date(),
        races: ['human', 'dwarf']

    }, {
        name: 'Katana',
        code: 'it02',
        description: 'Arma inizialmente usata dai Samurai e successivamente evolutasi con le arti Ninja.',
        image: 'http://www.clker.com/cliparts/5/s/J/S/8/i/wakisashi-sword.svg',
        price: 4,
        availability: 0,
        createdAt: new Date(),
        races: ['human', 'elf']
    }, {
        name: 'Pugnale',
        code: 'it03',
        description: 'Arma da taglio usata unicamente per gli scontri ravvicinati. Può essere nascosta, in modo da cogliere di sorpresa il nemico.',
        image: 'http://www.dailyclipart.net/wp-content/uploads/medium/Pirates3.jpg',
        price: 2.99,
        availability: 4,
        createdAt: new Date(),
        races: ['human', 'elf', 'dwarf']
    }, {
        name: 'Shuriken',
        code: 'it04',
        description: 'Arma esclusivamente da lancio. Grazie alla forma e alla struttura, raggiunge può raggiungere una velocità  impressionante.',
        image: 'http://www.karatemart.com/images/products/large/tiny-typhoon-shuriken.jpg',
        price: 1,
        availability: 2,
        createdAt: new Date(),
        races: ['human', 'elf']
    }, ];


    $scope.isSuitable = (item, race) => {
        return item.races.indexOf(race) > -1;
    };

    $scope.buy = (item) => {
        $scope.items.forEach((singleItem) => {
            if (singleItem.code === item.code) singleItem.availability -= 1;
        });
    };
});