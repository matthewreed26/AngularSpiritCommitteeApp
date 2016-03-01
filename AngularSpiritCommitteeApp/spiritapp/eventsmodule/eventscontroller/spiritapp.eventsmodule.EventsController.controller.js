(function () {
    angular.module("EventsModule").controller("EventsController", EventsController);
    
    EventsController.$inject = ["RefConstants", "$uibModal"];

    function EventsController(RefConstants, $uibModal) {
        var ec = this;
        ec.refStatuses = RefConstants.statuses;
        ec.events = [];
        ec.addEvent = addEvent;

        function addEvent() {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodule/eventsviews/add-event-view.html",
                size: "lg",
                controller: "AddEventController",
                controllerAs: "aec",
            }).result.then(function (newEvent) {ec.events.push(newEvent);});
        }
    }
})();