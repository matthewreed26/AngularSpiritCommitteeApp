(function () {
    angular.module("EventsModule").controller("EventsController", EventsController);
    
    EventsController.$inject = ["RefConstants", "$uibModal"];

    function EventsController(RefConstants, $uibModal) {
        var ec = this;
        ec.refStatuses = RefConstants.statuses;
        ec.events = [];
        ec.addEvent = addEvent;
        ec.progressEventBack = progressEventBack;
        ec.progressEventForward = progressEventForward;

        function addEvent() {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-event-view.html",
                size: "lg",
                controller: "AddEventController",
                controllerAs: "aec",
            }).result.then(function (newEvent) {ec.events.push(newEvent);});
        }

        function progressEventBack(event) {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-comment-view.html",
                size: "lg",
                controller: "AddCommentController",
                controllerAs: "acc",
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
                controllerAs: "acc",
            }).result.then(function (newComment) {
                //edc.event.comments.push(newComment);
                event.currentStatusID++;
            });
        }
    }
})();