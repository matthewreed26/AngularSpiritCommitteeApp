angular.module("NavModule", []).config(
    ["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/reference", {
            templateUrl: "spiritapp/refmodule/refviews/ref-view.html",
            controller: "RefController",
            controllerAs: "rc"
        }).when("/reference/:status", {
            templateUrl: "spiritapp/refmodule/refviews/ref-detail-view.html",
            controller: "RefDetailController",
            controllerAs: "rdc"
        }).otherwise({
            templateUrl: "spiritapp/eventsmodule/eventsviews/events-view.html",
            controller: "EventsController",
            controllerAs: "ec"
        });
    }]);