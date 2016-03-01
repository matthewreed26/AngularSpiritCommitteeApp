(function () {
    angular.module("EventsModule").controller("EventDetailController", EventDetailController);
    
    EventDetailController.$inject = ["RefConstants", "$routeParams"];

    function EventDetailController(RefConstants, $routeParams) {
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
            if (edc.commentText != undefined && edc.commentText.trim() != "") {
                edc.event.comments.push({
                    commentText: edc.commentText,
                    enteredDate: new Date(),
                });
            }
            edc.commentText = "";
        }
    }
})();