var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "templates/home/",
            controller: "homeController"
        })
        .when('/list', {
            templateUrl: "templates/list",
            controller: "listController"
        })

    .otherwise({
        redirectTo: "/"
    })

})