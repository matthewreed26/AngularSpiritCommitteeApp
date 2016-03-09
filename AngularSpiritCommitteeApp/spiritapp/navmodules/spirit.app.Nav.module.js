angular.module("NavModule", []).config(
    ["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/reference", {
            templateUrl: "spiritapp/refmodules/refviews/ref-view.html",
            controller: "RefController",
            controllerAs: "rc"
        }).when("/events/:eventName/:statusID/:startDate", {
            templateUrl: "spiritapp/eventsmodules/eventsviews/event-detail-view.html",
            controller: "EventDetailController",
            controllerAs: "edc"
        }).otherwise({
            templateUrl: "spiritapp/eventsmodules/eventsviews/events-view.html",
            controller: "EventsController",
            controllerAs: "ec"
        });
    }]);