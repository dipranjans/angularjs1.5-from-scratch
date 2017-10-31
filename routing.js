(function() {
    "user strict";

    angular.module('routeModule', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state({
                    name: 'root',
                    url: '',
                    component: 'rootComponent'
                })
                .state({
                    name: 'library',
                    url: '/library',
                    views: {
                        '': {
                            component: 'librayComponent'
                        },
                        'navbar@library': {
                            templateUrl: 'app/navbar.html'
                        },
                        'content@library': {
                            templateUrl: 'app/content.html'
                        },
                        'footer@library': {
                            templateUrl: 'app/footer.html'
                        }
                    }
                })
                .state({
                    name: 'library.newlyadded',
                    url: '/newlyadded/:id',
                    params: 'id',
                    views: {
                        'content@library': {
                            controller: function($stateParams) {
                                this.paramsID = $stateParams.id;
                            },
                            templateUrl: 'app/newlyadded.html',
                            controllerAs: 'vm'
                        }
                    }
                })
                .state({
                    name: 'library.myaccount',
                    url: '^/myaccount',
                    views: {
                        'content@library': {
                            templateUrl: 'app/myaccount.html'
                        }
                    }
                })
                .state({
                    name: 'library.administrator',
                    url: '^/administrator',
                    views: {
                        'content@library': {
                            templateUrl: 'app/administrator.html'
                        }
                    }
                })
                .state({
                    name: 'library.contact',
                    url: '^/contact',
                    views: {
                        'content@library': {
                            templateUrl: 'app/contact.html'
                        }
                    }

                })



            //url route provider
            $urlRouterProvider.otherwise('');
        });


})();