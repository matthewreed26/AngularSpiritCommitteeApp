angular.module("NavModule", ["ngRoute"]).config(
    ["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/reference", {
            templateUrl: "spiritapp/refmodule/refviews/ref-view.html",
            controller: "RefController",
            controllerAs: "rc"
        }).otherwise({
            templateUrl: "spiritapp/eventsmodule/eventsviews/events-view.html",
            controller: "EventsController",
            controllerAs: "ec"
        });
    }]);