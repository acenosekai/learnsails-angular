app.controller('LoginCtrl', ['$scope',
    function ($scope) {
        //do Login
        $scope.doLogin = function (login) {
            console.log(login);
        }
}]);