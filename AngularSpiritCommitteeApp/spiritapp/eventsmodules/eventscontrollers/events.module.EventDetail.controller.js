(function () {
    angular.module("EventsModule").controller("EventDetailController", EventDetailController);
    
    EventDetailController.$inject = ["RefConstants", "EventsDataAssistant", "$routeParams", "$uibModal"];

    function EventDetailController(RefConstants, EventsDataAssistant, $routeParams, $uibModal) {
        var edc = this;
        edc.refStatuses = RefConstants.statuses;
        edc.eventProgression = EventsDataAssistant.getEventProgression($routeParams.eventProgressionID);
        edc.addComment = addComment;

        function addComment() {
            $uibModal.open({
                templateUrl: "spiritapp/eventsmodules/eventsviews/add-comment-view.html",
                size: "lg",
                controller: "AddCommentController",
                controllerAs: "acc",
            }).result.then(function (newComment) { edc.event.comments.push(newComment); });
        }
    }
})();