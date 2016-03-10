(function (){
    angular.module("EventsModule").service("EventsDataAssistant",
            ["Event", "EventsData", function (Event, EventsData) {

        function findEventIndexes(event) {
            for (var i = 0; i < EventsData.length; i++) {
                for (var j = 0; j < EventsData[i].length; j++) {
                    if (EventsData[i][j] == event) {
                        return { progressionIndex: i, eventIndex: j };
                    }
                }
            }
        };

        function findEventProgressionIndex(eventProgressionID) {
            for (var i = 0; i < EventsData.length; i++) {
                if (EventsData[i][0].eventProgressionID == eventProgressionID) {
                    return i;
                }
            }
        };

        function progressEvent(event, addedComments, amount) {
            var eventIndexes = findEventIndexes(event);
            EventsData[eventIndexes.progressionIndex][eventIndexes.eventIndex].endDate
                    = new Date();
            EventsData[eventIndexes.progressionIndex].push(
                Event.init(event.eventProgressionID, event.eventName,
                        event.statusID + amount, addedComments)
            );
        };

        return {
            getEvents: function () {
                return EventsData;
            },
            addNewEvent: function (eventInfo) {
                EventsData.push(Event.init(EventsData.length, eventInfo.eventName, 1,
                        eventInfo.eventComments));
                return EventsData;
            },
            progressEventBack: function (event, addedComments) {
                progressEvent(event, addedComments, -1);
            },
            progressEventForward: function (event, addedComments) {
                progressEvent(event, addedComments, 1);
            },
            getEventProgression: function (currentEventProgressionID) {
                return EventsData[findEventProgressionIndex(currentEventProgressionID)];
            }
        };
    }])
})();