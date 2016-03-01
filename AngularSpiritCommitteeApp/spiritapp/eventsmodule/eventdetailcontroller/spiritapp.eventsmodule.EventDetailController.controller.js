(function () {
    angular.module("EventsModule").controller("EventDetailController", EventDetailController);
    
    EventDetailController.$inject = ["RefConstants", "$routeParams", "$uibModal"];

    function EventDetailController(RefConstants, $routeParams, $uibModal) {
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
                templateUrl: "spiritapp/eventsmodule/eventsviews/add-comment-view.html",
                size: "lg",
                controller: "AddCommentController",
                controllerAs: "acc",
            }).result.then(function (newComment) { edc.event.comments.push(newComment); });
        }
    }
})();