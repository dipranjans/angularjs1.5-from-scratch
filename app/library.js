(function() {
    "user strict";

    angular.module('libraryModule', [])
        .component('librayComponent', {
            controller: function() {
                console.log('libray component')
            },
            templateUrl: 'app/library.html'
        });

    //controller
})();