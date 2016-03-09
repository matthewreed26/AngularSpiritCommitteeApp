(function (){
    angular.module("EventsModule").factory("Event", function () {
        return {
            init: function (currentEventID, currentEventName, currentStatusID, addedComments) {
                return {
                    eventID: currentEventID,
                    eventName: currentEventName,
                    statusID: currentStatusID,
                    startDate: new Date(),
                    endDate: undefined,
                    comments: function (addedComments) {
                        var commentsArray = [];
                        if (addedComments != undefined && addedComments != "") {
                            commentsArray.push(addedComments);
                        }
                        return commentsArray;
                    },
                    lastUpdated: new Date(),
                    isCollapsed: true
                };
            }
        }
    });
})();