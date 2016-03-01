angular.module("NavModule", []).config(
    ["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/reference", {
            templateUrl: "spiritapp/refmodule/refviews/ref-view.html",
            controller: "RefController",
            controllerAs: "rc"
        }).when("/events/:eventName/:currentStatusID/:startDate", {
            templateUrl: "spiritapp/eventsmodule/eventsviews/event-detail-view.html",
            controller: "EventDetailController",
            controllerAs: "edc"
        }).otherwise({
            templateUrl: "spiritapp/eventsmodule/eventsviews/events-view.html",
            controller: "EventsController",
            controllerAs: "ec"
        });
    }]);