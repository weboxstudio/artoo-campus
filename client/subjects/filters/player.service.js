angular.module('artoo').service('PlayerSrv', function() {
    var player = {
        name: 'Gimli',
        race: 'drwaf',
    };

    this.get = () => {
        return player;
    };
});