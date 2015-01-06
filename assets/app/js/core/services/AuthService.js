app.value('session', {
    isLogedIn: false
});
app.factory('Auth', ['session',
    function (session) {
        return {
            getSession: function () {
                return session;
            },
            login: function(login) {
                if (login.username == "admin" && login.password == "admin") {
                    session.isLogedIn = true;
                    return true;
                } else {
                    return false;
                }
            },
        };
}]);