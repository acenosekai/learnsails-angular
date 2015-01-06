// Sub-application/main Level State
app.config(['$stateProvider',
    function ($stateProvider) {

        $stateProvider
            .state('app.login', {
                url: '/login',
                templateUrl: 'app/js/main/templates/login.tpl.html',
                controller: 'LoginCtrl'
            });

}]);