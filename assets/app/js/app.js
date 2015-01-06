var app = angular.module('app', ['ui.router'])
    .run(function ($rootScope, $state) {
        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            console.log(fromState);
            console.log(toState);
            

//            if (toState.authenticate && !AuthService.isAuthenticated()) {
//                // User isn’t authenticated
//                $state.transitionTo("login");
//                event.preventDefault();
//            }
        });
    });