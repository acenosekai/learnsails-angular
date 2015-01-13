app.controller('SignupCtrl', ['$scope', '$state', 'Auth',
    function ($scope, $state, Auth) {


        $scope.doSignUp = function (user) {
            Auth.signUp(user,
                function () {
                    console.log("success")
                }, function () {
                    console.log("error");
                });
        }

}]);