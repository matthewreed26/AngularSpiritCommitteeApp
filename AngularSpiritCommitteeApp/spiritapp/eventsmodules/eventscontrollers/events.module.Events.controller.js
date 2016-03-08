(function () {
    angular.module("EventsModule").controller("EventsController", EventsController);
    
    EventsController.$inject = ["RefConstants", "EventsData", "Event", "$uibModal"];

    function EventsController(RefConstants, EventsData, Event, $uibModal) {
        var ec = this;
        ec.refStatuses = RefConstants.statuses;
        ec.events = [];
        ec.addNewEvent = addNewEvent;
        ec.progressEventBack = progressEventBack;
        ec.progressEventForward = progressEventForward;
        ec.refreshEvents = refreshEvents;
        refreshEvents();

        function refreshEvents() {
            var currentEvents = [];
            for (var i = 0; i < EventsData.length; i++) {
                for (var j = 0; j < EventsData[i].length; j++) {
                    if (EventsData[i][j].endDate == undefined) {
                        currentEvents.push(EventsData[i][j]);
                    }
                }
            }
            ec.events = currentEvents;
        };

        function addNewEvent() {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-event-view.html",
                size: "lg",
                controller: "AddEventController",
                controllerAs: "aec"
            }).result.then(function (eventName) {
                var newEventsArray = [];
                newEventsArray.push(Event.init(EventsData.length, eventName));
                EventsData.push(newEventsArray);
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