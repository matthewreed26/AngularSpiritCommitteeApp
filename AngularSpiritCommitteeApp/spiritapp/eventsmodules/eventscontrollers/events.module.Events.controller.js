(function () {
    angular.module("EventsModule").controller("EventsController", EventsController);
    
    EventsController.$inject = ["RefConstants", "EventsData", "$uibModal"];

    function EventsController(RefConstants, EventsData, $uibModal) {
        var ec = this;
        ec.refStatuses = RefConstants.statuses;
        ec.events = [];
        ec.addEvent = addEvent;
        ec.progressEventBack = progressEventBack;
        ec.progressEventForward = progressEventForward;
        ec.refreshEvents = refreshEvents;
        refreshEvents();

        function refreshEvents() {
            var currentEvents = [];
            for (var i = 0; i < EventsData.eventsList.length; i++) {
                for (var j = 0; j < EventsData.eventsList[i].length; j++) {
                    if (EventsData.eventsList[i][j].endDate == undefined) {
                        currentEvents.push(EventsData.eventsList[i][j]);
                    }
                }
            }
            ec.events = currentEvents;
        };

        function addEvent() {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-event-view.html",
                size: "lg",
                controller: "AddEventController",
                controllerAs: "aec",
                resolve: { currentEventID: ec.events.length }
            }).result.then(function (newEvent) {
                var newEventsArray = [];
                newEventsArray.push(newEvent);
                EventsData.eventsList.push(newEventsArray);
                refreshEvents();
            });
        }

        function progressEventBack(event) {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-comment-view.html",
                size: "lg",
                controller: "AddCommentController",
                controllerAs: "acc"
            }).result.then(function (newComment) {
                //edc.event.comments.push(newComment);
                event.currentStatusID--;
            });
        }

        function progressEventForward(event) {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-comment-view.html",
                size: "lg",
                controller: "AddCommentController",
                controllerAs: "acc"
            }).result.then(function (newComment) {
                //edc.event.comments.push(newComment);
                event.currentStatusID++;
            });
        }
    }
})();