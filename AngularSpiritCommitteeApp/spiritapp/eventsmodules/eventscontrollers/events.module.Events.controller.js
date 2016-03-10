(function () {
    angular.module("EventsModule").controller("EventsController", EventsController);
    
    EventsController.$inject = ["RefConstants", "EventsDataAssistant", "$uibModal"];

    function EventsController(RefConstants, EventsDataAssistant, $uibModal) {
        var ec = this;
        ec.refStatuses = RefConstants.statuses;
        ec.events = EventsDataAssistant.refreshedCurrentEvents();
        ec.addNewEvent = addNewEvent;
        ec.progressEventBack = progressEventBack;
        ec.progressEventForward = progressEventForward;

        function addNewEvent() {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-event-view.html",
                size: "lg",
                controller: "AddEventController",
                controllerAs: "aec"
            }).result.then(function (eventInfo) {
                EventsDataAssistant.addNewEvent(eventInfo);
                ec.events = EventsDataAssistant.refreshedCurrentEvents();
            });
        }

        function progressEventBack(event) {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-comment-view.html",
                size: "lg",
                controller: "AddCommentController",
                controllerAs: "acc"
            }).result.then(function (newComment) {
                EventsDataAssistant.progressEventBack(event);
                ec.events = EventsDataAssistant.refreshedCurrentEvents();
            });
        }

        function progressEventForward(event) {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-comment-view.html",
                size: "lg",
                controller: "AddCommentController",
                controllerAs: "acc"
            }).result.then(function (newComment) {
                EventsDataAssistant.progressEventForward(event);
                ec.events = EventsDataAssistant.refreshedCurrentEvents();
            });
        }
    }
})();