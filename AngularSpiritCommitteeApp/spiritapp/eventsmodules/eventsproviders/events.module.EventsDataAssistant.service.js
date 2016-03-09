(function (){
    angular.module("EventsModule").service("EventsDataAssistant",
            ["Event", "EventsData", function (Event, EventsData) {
        return {
            addNewEvent: function (eventInfo) {
                var newEventsArray = [];
                newEventsArray.push(Event.init(EventsData.length, eventInfo.eventName, 1,
                        eventInfo.eventComments));
                EventsData.push(newEventsArray);
            },
            refreshedCurrentEvents: function () {
                var currentEvents = [];
                for (var i = 0; i < EventsData.length; i++) {
                    for (var j = 0; j < EventsData[i].length; j++) {
                        if (EventsData[i][j].endDate == undefined) {
                            currentEvents.push(EventsData[i][j]);
                        }
                    }
                }
                return currentEvents;
            }
        };
    }])
})();