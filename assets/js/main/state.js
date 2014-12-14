// Sub-application/main Level State
app.config(['$stateProvider', function($stateProvider) {

  $stateProvider
    .state('app.home', {
      url: '/home',
      templateUrl: 'js/main/templates/home.tpl.html',
      controller: 'HomeCtrl'
    })
    .state('app.about', {
      url: '/about',
      templateUrl: 'js/main/templates/about.tpl.html',
      controller: 'AboutCtrl'
    })
    .state('app.contact', {
      url: '/contact',
      templateUrl: 'js/main/templates/contact.tpl.html',
      controller: 'ContactCtrl'
    })
    .state('app.signup', {
      url: '/signup',
      templateUrl: 'js/main/templates/signup.tpl.html',
      controller: 'SignupCtrl'
    });

}]);