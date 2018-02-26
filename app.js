var app = angular.module('help4help', []);
app.controller('mainCtrl', function($scope, $http) {
    var v = Date.now();
    $http.get("services.json?cache-bust=" + v)
    .then(function (response) {
        $scope.developers = response.data.developers;
    });
});
