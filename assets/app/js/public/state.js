// Sub-application/main Level State
app.config(['$stateProvider',
    function ($stateProvider) {

        $stateProvider
            .state('app.login', {
                url: '/signin',
                templateUrl: 'app/js/public/templates/signin.tpl.html',
                controller: 'SigninCtrl'
            }).state('app.signup', {
                url: '/signup',
                templateUrl: 'app/js/public/templates/signup.tpl.html',
                controller: 'SignupCtrl'
            });

}]);