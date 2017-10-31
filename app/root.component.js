(function() {
    "user strict";

    angular.module('rootModule', [])
        .component('rootComponent', {
            controller: function() {
                console.log('root component')
            },
            templateUrl: 'app/root.component.html'
        });

    //controller
})();