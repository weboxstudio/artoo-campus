angular.module('artoo').service('playerSrv', function() {
    var dictionary = {
        fight: 'The player started a fight',
        potion: 'the player just drank a potion',
    };

    var logs = [];
    this.log = (code) => {
        var text = dictionary[code] || 'The player just made un unknown action';
        var date = new Date();
        logs.push({
            text: text,
            date: date
        });
    };

    this.getLogs = () => {
        return logs;
    }
});