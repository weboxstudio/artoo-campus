// define app module

var app= angular
    .module('artooinit', [ ])
    .run(() => {
        console.info(' i run the setter!');
    });
    //.config(angular.noop)

angular
.module('artooinit')
.run(() => {
        console.info('i run the getter!');
    });

// define a run function

app.run(() =>  {
    console.info('i run from the module in the var');
});