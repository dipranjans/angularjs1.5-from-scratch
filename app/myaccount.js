(function() {
    "user strict";
    angular.module('libraryModule')
        .factory('myFactory', myFactory)
        .component('parent', {
            template: `
                parent data :=> {{message}} <br>
                <div ng-transclude></div>`,
            transclude: true,
            controller: function($scope, myFactory) {
                this.$onInit = function() {
                    this.name = 'parent to child';

                    //myFactory.addname(this.name);

                    $scope.$on('eventName', function(event, args) {
                        $scope.message = args.message;
                    });
                }
            }
        })
        .component('child', {
            require: {
                parentCtrl: '^parent'
            },
            template: `child data:=> {{$ctrl.name}}`,
            controller: function($scope) {
                this.$onInit = function() {
                    this.name = this.parentCtrl.name;
                    $scope.$emit('eventName', { message: 'child to parent' });
                }
            }
        })
        .component('friend', {
            template: 'friend',
            bindings: {
                name: '<'
            },
            controller: function($scope, myFactory) {
                this.$onInit = function() {

                    myFactory.addname();
                }
            }
        })

    myFactory.$inject = ['$log'];

    function myFactory($log) {
        function addname() {
            $log.log('dipranjan sukla');
        }
        return {
            addname: addname
        }
    }

})();