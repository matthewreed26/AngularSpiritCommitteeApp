(function () {
    angular.module("EventsModule").controller("EventDetailController", EventDetailController);
    
    EventDetailController.$inject = ["RefConstants", "EventsData", "$routeParams", "$uibModal"];

    function EventDetailController(RefConstants, EventsData, $routeParams, $uibModal) {
        var edc = this;
        edc.refStatuses = RefConstants.statuses;
        edc.event = {
            eventName: $routeParams.eventName,
            currentStatusID: $routeParams.currentStatusID,
            startDate: new Date($routeParams.startDate),
            comments: []
        };
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