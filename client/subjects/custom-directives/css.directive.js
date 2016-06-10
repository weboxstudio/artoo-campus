angular.module('artoo').directive('cssAdder', function() {
    return {
        restrict: 'A',
        scope: {
            cssAdder: '=',
        },
        link: function(scope, elem) {
            //console.info('elem');
            var options = scope.cssAdder || {};
            var color = options.color || 'gray';
            var thickness = options.thickness || '1px';
            var typology = options.typology || 'solid';
            elem.css('border', [thickness, typology, color].join(' '));
        },
    };
});
angular.module('artoo').controller('cssCtrl', function($scope) {
    $scope.options = {
        color: 'red',
    };
});